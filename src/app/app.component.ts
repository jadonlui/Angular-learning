import { Todo, TodoClass, TodoStatusType } from './＠models/todo.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'OneTodo';
  placeholder = 'What needs to be done????';
  toggleAllBtn = false;
  nowTodoStatusType = TodoStatusType.All;
  TodoStatusType = TodoStatusType;

  // todoDataList: TodoClass[] = [
  //   { Status: true, Thing: 'oneThing' },
  //   { Status: false, Thing: 'twoThing' },
  //   { Status: false, Thing: 'threeThing' },
  // ].map((data) => new TodoClass(data.Thing, data.Status));
  todoDataList: Todo[] = [
    { Status: true, Thing: 'oneThing', Editing: false },
    { Status: false, Thing: 'twoThing', Editing: false },
    { Status: false, Thing: 'threeThing', Editing: false },
  ];

  test: Todo[] = [{ Status: true, Thing: 'asd', Editing: true }];
  cc(index: Todo) {}

  todoInput: any;

  // class 中的方法
  toggleAll() {
    this.toggleAllBtn = !this.toggleAllBtn;
    // 方法裡面要加this才能指到變數名稱
    this.todoDataList.forEach((data) => {
      data.Status = this.toggleAllBtn;
    });
  }
  click(item: Todo) {
    item.Status = !item.Status;

    if (this.todoCompleted.length === this.todoDataList.length) {
      this.toggleAllBtn = true;
    } else {
      this.toggleAllBtn = false;
    }
  }

  delete(todo: Todo) {
    console.log('todo', todo);
    this.todoDataList = this.todoDataList.filter((data) => data !== todo);
    // this.todoDataList.splice(index, 1);
  }
  addEnter(event: KeyboardEvent, input: HTMLInputElement) {
    // console.log(event.key);
    if (event.key === 'Enter') {
      // const value = (event.target as HTMLInputElement).value;

      // this.todoDataList.push(new TodoClass(input.value, false));
      // (event.target as HTMLInputElement).value = '';
      input.value = '';
    }
  }
  add(value: string) {
    const todo: Todo = {
      Status: false,
      Thing: value,
      Editing: false,
    };
    this.todoDataList.push(todo);

    //--------------------------
    // const todo: TodoClass = {
    //   Status: false,
    //   Thing: value,
    // };-->有點多此一舉的話->

    // this.todoDataList.push(new TodoClass(value, false));
    // 直接new一個

    // value = '';//會清不了HTML的value->是應為傳值傳址,是嗎？ＮＯ18
  }

  edit(item: Todo) {
    item.Editing = true;
    console.log(item.Editing);
  }

  update(item: Todo, value: string) {
    item.Thing = value;
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

  get todoActive(): Todo[] {
    return this.todoDataList.filter((data) => data.Status === false);
    //取到未完成
  }

  get todoCompleted(): Todo[] {
    return this.todoDataList.filter((data) => data.Status === true);
    //取到完成
  }

  clearCompleted() {
    this.todoDataList = this.todoActive;
  }
}
