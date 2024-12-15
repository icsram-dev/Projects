import TodoList from "./TodoList.js";
import Todo from "./Todo.js";
import TodoCommands from "./TodoCommands.js";

const todoCommands = new TodoCommands();

const todoList = new TodoList("todos.json");

const command = process.argv[2];
const text = process.argv[3];
const argument2 = process.argv[4];

function listTodos() {
  console.log(`Todos:\n${todoList.listTodos()}`);
}

const updateTodoAndList = (id, newText, isCompleted) => {
  todoList.updateTodoText(id, newText, isCompleted);
  listTodos();
};

const args = process.argv.slice(3);

function showHelp() {
  console.log(`
    CLI Todo App Commands
    ---------------------
    SYNOPSIS
        todo [option] [id] [text]
    
    OPTIONS
        -list, -l
            Lists existing tasks
        -add, -a
            Adds a task to the list
        -toggle, -t
            Completes or uncompletes a task
        -update, -u
            Updates a specific todo text
        -delete, -d
            Deletes a specific task
  `);
}

if (command === "-add") {
  if (!text) {
    console.log("Invalid ID.");
  } else {
    const newTodo = new Todo();
    newTodo.text = text;
    todoList.addTodo(newTodo);
    listTodos();
  }
} else if (command === "-list") {
  console.log("Tennivalók:");
  listTodos();
} else if (command === "-delete") {
  const id = parseInt(args[0]);
  if (isNaN(id)) {
    console.log("ID must be a provided");
  } else {
    const success = todoList.deleteTodo(id);
    if (!success) {
      console.log("");
    }
  }
} else if (command === "-delete-all") {
  todoList.deleteAllTodos();
} else if (command === "-help") {
  showHelp();
} else if (command === "-update") {
  const id = parseInt(args[0]);
  const newText = args.slice(1).join(" ");
  if (isNaN(id) || !newText) {
    console.log("Invalid ID or todo text must be provided.");
  } else {
    todoList.updateTodoText(id, newText);
    listTodos();
  }
} else if (command === "-toggle") {
  const id = parseInt(args[0]);
  if (!isNaN(id)) {
    todoList.toggleTodo(id);
    todoList.listTodos();
  } else {
    console.log("Invalid ID.");
  }
}
