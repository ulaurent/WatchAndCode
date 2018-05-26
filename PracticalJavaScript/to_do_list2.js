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
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  
  
  // Object used to delete a todo
  deleteTodo: function (startPosition, endPosition){
    this.todos.splice(startPosition, endPosition);
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
    this.displayTodos();
  },
  
  // Object used to toggle the object completed
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  
};

// We want to get access to the display todos button
// We want to run displayTodos method when display todos button is hit


// Introduced an Object handlers
  var handlers = {
    
    //Method  for display todos button
    displayTodos: function(){
    todoList.displayTodos();
    },
    
    //Method  for toggle all todos button
    toggleAll: function(){
      todoList.toggleAll();
    },  
    
    // Method to add a todo button and text input
    addTodo: function(){
      var TodoTextInput = document.getElementById('TodoTextInput');
      todoList.addTodo(TodoTextInput.value);
      TodoTextInput.value= '';
    },
    
    // Method for change a todos button and text input
    changeTodo: function(){
      var Position = document.getElementById('Position');
      var newTodoText = document.getElementById('newTodoText');
      todoList.changeTodo(Position.valueAsNumber,newTodoText.value);
      Position.valueAsNumber = '';
      newTodoText.value = '';
    },
    
    // Method for deleting a todo from the list using a button and text input
    deleteTodo: function(){
      var startPosisiton = document.getElementById('startPosition');
      var endPosisiton = document.getElementById('endPosition');
      todoList.deleteTodo(startPosition.valueAsNumber, endPosition.valueAsNumber);
      startPosition.valueAsNumber = '';
    },
    
    // Method for toggling a todo from the list using a button and text input
    toggleCompleted: function(){
      var togglePosition = document.getElementById('togglePosition');
      todoList.toggleCompleted(togglePosition.valueAsNumber);
      togglePosition.valueAsNumber = '';
      
    }
  
  };
 
  
  




