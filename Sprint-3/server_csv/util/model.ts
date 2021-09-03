export interface TodoListItem {
  id: string;
  name: string;
  description: string;
  duedate: string;
  type: string;
  completed: string;
}

export type AddTodoListForm = {
  id: string;
  name: string;
  description: string;
  duedate: string;
  type: string;
  completed: string;
};
