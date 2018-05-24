// This program demonstrates got to utilize objects 
// dot notation and functions by adding, changing, and toggling 
// through objects within an array
var todoList = {
  todos: [],
  // Object used to display array
  displayTodos: function(){
    console.log('My todos', this.todos);
  },
  // Object used to add to an array
  addTodo: function(todoText){
  this.todos.push({
    todoText: todoText,
    completed: false
  });
  this.displayTodos();
  },
  // Object used to change an elemnet within an array
  changeTodo: function(position, todoText){
    //this.todos[position] = newValue;
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  
  deleteTodo: function (startPosisiton, movePosition){
    this.todos.splice(startPosisiton, movePosition);
    this.displayTodos();
  },
  // Object used to toggle the object completed
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  
};
