// This program demonstrates got to utilize objects 
// dot notation and functions by adding, changing, and toggling 
// through objects within an array
var todoList = {
  todos: [],
  // Object used to display array
  displayTodos: function(){
    if (this.todos.length === 0){
      console.log('Your todo List is empty');
    }
    else{
      console.log('My todos:');
    for(var i=0;i<this.todos.length;i++){

      if (this.todos[i].completed === true){
        console.log('(x)', this.todos[i].todoText);
      }
      else {
        console.log('( )',this.todos[i].todoText);
      }
    }
    }
    
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
  // Object used to delete a todo
  deleteTodo: function (startPosisiton, movePosition){
    this.todos.splice(startPosisiton, movePosition);
    this.displayTodos();
  },
  // Object used to toggle all todo's in a list
  toggleAll: function(){
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    for(var i=0; i<totalTodos; i++){
      if(this.todos[i].completed === true){
        completedTodos++;
      }
    }
    // Case 1: If everything is true set all false
    if(completedTodos === totalTodos){
      for(i=0; i<totalTodos; i++){
        this.todos[i].completed = false;
      }
    }
    // Otherwise make everything false
    else{
      for(i=0; i<totalTodos; i++){
        this.todos[i].completed = true;
      }
    }
  },
  
  // Object used to toggle the object completed
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  
};
  
  




