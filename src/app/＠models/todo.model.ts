export interface Todo {
  Status: boolean;
  Thing: string;
  Editing: boolean;
}

export class TodoClass {
  // Status: boolean = false;
  // Thing: string = '';
  Status: boolean;
  Thing: string;
  constructor(_thing: string, _status: boolean) {
    this.Thing = _thing;
    this.Status = _status;
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
