// This Program displays how to display, add, change, and  delete an array

// Introduces a variable todos which holds an array of strings
var todos = ['item1','item2','item3']

// Constructed function to display the array
function displayTodos(){
  console.log('My todos:',todos);
}

// Constructed function to add to the array list
function addTodos(todo){
  todos.push(todo);
  displayTodos();
}

addTodos('Hello there');

// Constructed function to change an array element
function changeTodos(todo){
  todos[0]= todo;
  displayTodos();
}

changeTodos('WE Lit We Lit')

// Constructed function to delete an array element
function deleteTodo(position,endposition){
  todos.splice(position,endposition);
}

deleteTodo(1,3);
displayTodos();
