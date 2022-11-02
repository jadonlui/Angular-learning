import { Todo, TodoClass, TodoStatusType } from './＠models/todo.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'OneTodo';
  placeholder = 'What needs to be done????';
  toggleAllBtn = false;
  nowTodoStatusType = TodoStatusType.All;
  TodoStatusType = TodoStatusType;

  todoDataList: Todo[] = [];

  todoInputModel = '';

  date = new Date();

  toDoStatusList = [
    {
      type: TodoStatusType.All,
      text: 'All',
    },
    {
      type: TodoStatusType.Active,
      text: 'Active',
    },
    {
      type: TodoStatusType.Completed,
      text: 'Completed',
    },
  ];
  constructor(private http: HttpClient) {}

  //程式進來會先跑這個方法
  ngOnInit(): void {
    this.getdata();
  }

  getdata() {
    this.http.get<Todo[]>('/api/todo2_16').subscribe((data) => {
      this.todoDataList = data;
      console.log('asdddddddd', this.todoDataList);
    });
  }

  cc(index: Todo) {}

  todoInput: any;

  // class 中的方法
  toggleAll() {
    this.toggleAllBtn = !this.toggleAllBtn;
    // 方法裡面要加this才能指到變數名稱
    this.todoDataList.forEach((data) => {
      data.Status = this.toggleAllBtn;
    });
    this.http
      .put('/api/todo2_16/Status/' + this.toggleAllBtn, null)
      .subscribe();
    // 作者大大寫的api，改全部狀態
  }
  click(item: Todo) {
    item.Status = !item.Status;

    this.http.put('/api/todo2_16/' + item.TodoId, item).subscribe();
    if (this.toDoStatusList.length != 0) {
      if (this.todoActive.length === this.todoDataList.length)
        this.toggleAllBtn = false;
      if (this.todoCompleted.length === this.todoDataList.length)
        this.toggleAllBtn = true;
    }
  }

  delete(index: number) {
    let temp = 0;
    let found = -1;
    switch (this.nowTodoStatusType) {
      case TodoStatusType.Active:
        this.todoDataList.forEach((x, i) => {
          if (x.Status === false) {
            if (temp === index) {
              found = i;
            }
            temp++;
          }
        });
        break;
      case TodoStatusType.Completed:
        this.todoDataList.forEach((x, i) => {
          if (x.Status === true) {
            if (temp === index) {
              found = i;
            }
            temp++;
          }
        });
        break;
      default:
        found = index;
        break;
    }
    if (found === -1) alert('something wrong');
    else {
      console.log(this.todoDataList[found]);
      this.http
        .delete('/api/todo2_16/' + this.todoDataList[found].TodoId)
        .subscribe();
      this.todoDataList.splice(found, 1);
    }
  }

  add() {
    if (!this.todoInputModel.match(/[^\s]+/)) return;
    const todo: Todo = {
      TodoId: '',
      Status: false,
      Thing: this.todoInputModel,
      Editing: false,
    };
    this.http.post<Todo>('/api/todo2_16', todo).subscribe((data) => {
      // this.getdata();
      console.log('data', data);
      this.todoDataList.push(data);
      console.log('todoDataList', this.todoDataList);
    });

    console.log('asd', this.todoDataList);
    // this.todoDataList.push(todo);
    this.todoInputModel = '';
  }
  // add(value: string) {
  //   if (!value.match(/[^\s]+/)) return;
  //   const todo: Todo = {
  //     Status: false,
  //     Thing: value,
  //     Editing: false,
  //   };
  //   this.todoDataList.push(todo);
  // }

  edit(item: Todo) {
    item.Editing = true;
    console.log(item.Editing);
  }

  update(item: Todo) {
    console.log(item.TodoId);
    this.http.put('/api/todo2_16/' + item.TodoId, item).subscribe();
    item.Editing = false;
  }
  setTodoSet(type: number) {
    this.nowTodoStatusType = type;
  }

  get NowTodoList() {
    let list: Todo[] = [];

    switch (this.nowTodoStatusType) {
      case TodoStatusType.Active:
        list = this.todoActive;
        break;

      case TodoStatusType.Completed:
        list = this.todoCompleted;
        break;

      default:
        list = this.todoDataList;
        break;
    }

    return list;
  }

  get todoActive() {
    return this.todoDataList.filter((data) => !data.Status);
  }
  get todoCompleted() {
    return this.todoDataList.filter((data) => data.Status);
  }

  clearCompleted() {
    let idList = '';
    this.todoDataList.forEach((data) => {
      if (data.Status) {
        idList = idList + ',' + data.TodoId;
      }
    });
    this.http.delete('/api/todo2_16/' + idList).subscribe();
    this.todoDataList = this.todoActive;
  }
}
