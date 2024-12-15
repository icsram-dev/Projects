import TodoList from "./TodoList.js";

export default class TodoApp {
  addTodoAndList(text) {
    const newTodo = this.createTodoWithText(text);
    this.todoList.addTodo(newTodo);
  }

  updateTodoAndList(id, newText) {
    this.updateTodoWithId(id, newText);
  }

  deleteTodoAndList(id) {
    this.deleteTodoWithId(id);
  }
}
