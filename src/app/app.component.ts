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

  toDoStatusList=[
    {
      type:TodoStatusType.All,
      text:"All"
    },
    {
      type:TodoStatusType.Active,
      text:"Active"
    },
    {
      type:TodoStatusType.Completed,
      text:"Completed"
    },
  ]
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

    if(this.toDoStatusList.length!=0){
      if(this.todoActive.length ===this.toDoStatusList.length)this.toggleAllBtn=false
      if(this.todoCompleted.length ===this.toDoStatusList.length)this.toggleAllBtn=true
    }
  }

  delete(index:number) {
    let temp = 0
    let found =-1
    switch(this.nowTodoStatusType){
      case TodoStatusType.Active:
        this.todoDataList.forEach((x,i)=>{
        if(x.Status===false ){
          if(temp===index){
            found=i
          }
          temp++
        }
      })
        break;
      case TodoStatusType.Completed:
        this.todoDataList.forEach((x,i)=>{
          if(x.Status===true ){
            if(temp===index){
              found=i
            }
            temp++
          }
        })
        break;
      default:
        found=index
        break;
    }
    if(found===-1) alert("something wrong")
    else  this.todoDataList.splice(found,1)
  }

  add(value: string) {
    if(!value.match(/[^\s]+/) )return 
    const todo: Todo = {
      Status: false,
      Thing: value,
      Editing: false,
    };
    this.todoDataList.push(todo);
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
        list =  this.todoActive
        break;

      case TodoStatusType.Completed:
        list =  this.todoCompleted
        break;

      default:
        list = this.todoDataList;
        break;
    }
   
    return list;
  }

  get todoActive(){
    return  this.todoDataList.filter((data) => !data.Status );
  }
  get todoCompleted(){
    return this.todoDataList.filter((data) => data.Status );
  }


  clearCompleted() {
    this.todoDataList = this.todoActive;
  }
}
