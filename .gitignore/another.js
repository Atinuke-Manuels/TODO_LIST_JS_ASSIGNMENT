//declare all variables needed for all functions we are going to use
let inputField = document.getElementById("inputField");
inputField.classList.add("text");
let newListItem = document.createElement('div');
let addNewButton = document.getElementById("addMe");
let unorderedList = document.getElementById("todoList");
unorderedList.appendChild(newListItem);
let footerButton = document.getElementById("footerButton");
// unorderedList.innerHTML = localStorage.getItem("value"); 
newListItem.style = "margin: 0 auto; display: flex; max-width: 75%; justify-content: space-between;"
// newListItem.innerHTML = JSON.parse(localStorage.getItem("value"));

 //set a condition that would not allow you insert empty/blank spaces
 if(inputField.value.trim() === ""){
    return;
}

addNewButton.addEventListener('click', ()=>{
    let newInput = document.createElement('li');
    newInput = inputField.vaue;
    newListItem.appendChild(newInput);
    //ensure that your input field is refreshed after the add button is clicked.
    inputField.value = "";
});
// //Create functions to add, delete and clear all.
// addNewButton.addEventListener('click', function(e){  
//     e.preventDefault(); 

//     const task = inputField.value;
//     //create a div to hold the input from the input field
//     const newtask = document.createElement('div');
//     newtask.classList.add('task'); 
//     const newtaskContent = document.createElement('p');
//     newtaskContent.classList.add('content');
//     // let task = inputField.value;
//     newtask.appendChild(newtaskContent);

//     const inputNewTask = document.createElement('input');
//     inputNewTask.classList.add('text');
//     inputNewTask.type = 'text';
//     inputNewTask.value = task;
//     inputNewTask.setAttribute('readonly', 'readonly');

//     newtaskContent.appendChild(inputNewTask);

//     // newListItem.style.border = "2px solid white";
    //style the new div you created

    // //assign to local storage so that when your page is refreshed no data is lost.
    // localStorage.setItem('value', JSON.stringify(newtaskContent));
    // inputNewTask.innerHTML = JSON.parse(localStorage.getItem("value"));
    

    // // //add the new list items ontop of your list using the prepend object method
    // newListItem.appendChild(newtask);
    
    // //ensure that your input field is refreshed after the add button is clicked.
    // inputField.value = "";
  
    
    //To strike out a task
    // newListItem.addEventListener('click', function(){
    //     newListItem.style.textDecoration = "line-through";
    // })

    // //To remove the strike
    // newListItem.addEventListener('dblclick', function(){
    //     newListItem.style.textDecoration = "none";
    // })

// });

  //display the current date. Remember that it starts from zero, Jan= 0 and Dec = 11;
    const dateDisplay = document.createElement('span');
    dateDisplay.classList.add('date');
    let date = new Date();
    year = date.getFullYear();
    month = date.getMonth();
    day = date.getDate();
    dateDisplay.innerText = ' Created at ' + day + '-' + month + '-' + year;

    //This adds the current date to the todo list
    newListItem.appendChild(dateDisplay);

    //add a button that allows you edit the task.
    const editButton = document.createElement("button");
    editButton.style = "background-color: green; color: white; border: none; padding: 3px; border-radius: 5px;"
    editButton.classList.add("Edit");
    editButton.innerHTML = "Edit Task";

    editButton.addEventListener('click', function(e){
        newListItem.contentEditable = true;
    });

    newListItem.appendChild(editButton);

    //create a button that deletes the task you inputted earlier
    const deleteButton = document.createElement("button");
    // style the delete button
    deleteButton.style = "background-color: red; color: white; border: none; padding: 3px; border-radius: 5px;"
    deleteButton.classList.add("delete");
    deleteButton.innerHTML = "Delete";

    //add the delete button to the todo list
    newListItem.appendChild(deleteButton);

    //create a function that allows you delete a task
    deleteButton.addEventListener('click', function(e){
    let newListItem = deleteButton.parentNode;
    newListItem.parentNode.removeChild(newListItem);
    })

    footerButton.addEventListener('click', function(){
        newListItem = "";
        unorderedList.innerText = newListItem;
    })














