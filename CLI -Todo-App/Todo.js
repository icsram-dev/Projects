class Todo {
  constructor(id, text) {
    this.id = id;
    this.text = text;
    this.completed = false;
  }

  updateText(newText) {
    this.text = newText;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }
}

export default Todo;
