export interface Todo {
  TodoId: string;
  Status: boolean;
  Thing: string;
  Editing: boolean;
}

export class TodoClass implements Todo {
  // Status: boolean = false;
  // Thing: string = '';
  TodoId: string;
  Status: boolean;
  Thing: string;
  Editing: boolean;
  constructor(_thing: string, _status: boolean) {
    this.Thing = _thing;
    this.Status = _status;
    this.Editing = false;
    this.TodoId = '';
  }
  toggle() {
    this.Status = !this.Status;
  }
}
export enum TodoStatusType {
  All,
  Active,
  Completed,
}
