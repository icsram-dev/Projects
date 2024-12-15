import fs from "fs";
import Todo from "./Todo.js";

class TodoList {
  constructor(fileName) {
    this.fileName = fileName;
    this.todos = this.loadTodos() || [];
  }

  addTodo(todo) {
    todo.id = this.todos.length + 1;
    this.todos.push(todo);
    this.saveAndPrintTodos();
  }

  updateTodoText(id, newText) {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (todoIndex !== -1) {
      this.todos[todoIndex].text = newText;
      this.saveAndPrintTodos();
    } else {
      console.log("Invalid ID.");
    }
  }

  deleteTodo(id) {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (todoIndex !== -1) {
      this.todos.splice(todoIndex, 1);
      this.saveAndPrintTodos();
    } else {
      console.log("Invalid ID.");
    }
  }

  toggleTodo(id) {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);

    if (todoIndex !== -1) {
      this.todos[todoIndex].completed = !this.todos[todoIndex].completed;
      this.saveAndPrintTodos();
    } else {
      console.log("Invalid ID.");
    }
  }

  deleteAllTodos() {
    this.todos = [];
    this.saveAndPrintTodos();
  }

  saveAndPrintTodos() {
    this.saveTodos();
    this.listTodos();
  }

  printTodos() {
    const todos = this.listTodos();

    if (todos.length === 0) {
      console.log("Nincs tennivaló.");
    } else {
      console.log(`Tennivalók:\n${this.listTodos()}`);
      todos.forEach((todo, index) => {
        console.log(`- ${index + 1}. ${todo}`);
      });
    }
  }

  saveTodos() {
    const data = JSON.stringify(this.todos, null, 2);
    fs.writeFileSync(this.fileName, data);
  }

  loadTodos() {
    try {
      const data = fs.readFileSync(this.fileName, "utf8");
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  listTodos() {
    return this.todos
      .map(
        (todo) =>
          `- ${todo.id}. [${todo.completed ? "✔️ " : "❌"}] ${todo.text}`
      )
      .join("\n");
  }
}

export default TodoList;
