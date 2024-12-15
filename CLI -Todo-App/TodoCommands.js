class TodoCommands {
  showHelp() {
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
}

export default TodoCommands;
