//declare all variables needed for all functions we are going to use
let inputField = document.getElementById("inputField");
inputField.classList.add("text");
let newListItem = document.createElement('div');
let addNewButton = document.getElementById("addMe");
let unorderedList = document.getElementById("todoList");
let footerButton = document.getElementById("footerButton");
unorderedList.innerHTML = JSON.parse(localStorage.getItem("value"));
newListItem.innerHTML = JSON.parse(localStorage.getItem("value"));

//Create functions to add, delete and clear all.
addNewButton.addEventListener('click', function(e){  
    e.preventDefault(); 

    //set a condition that would not allow you insert empty/blank spaces
    if(inputField.value.trim() === ""){
        return;
    }

    //create a div to hold the input from the input field
    newListItem = document.createElement('div'); 
    // let task = newListItem.innerHTML;
    let task = inputField.value;

    // newListItem.style.border = "2px solid white";
    //style the new div you created
    newListItem.style = "margin: 0 auto; display: flex; max-width: 75%; justify-content: space-between; padding: 0.6rem 0;"

    //assign to local storage so that when your page is refreshed no data is lost.
    
    localStorage.setItem('value', JSON.stringify(task));
    newListItem.innerHTML = JSON.parse(localStorage.getItem("value"));

    //add the new list items ontop of your list using the prepend object method
    unorderedList.prepend(newListItem);
    
    //ensure that your input field is refreshed after the add button is clicked.
    inputField.value = "";

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

    //The concept of using parentNode gives access to individual input.
    editButton.addEventListener('click', function(e){
        confirm("Do you really want to edit this task? go ahead by clicking on the task.");
        let newListItem = editButton.parentNode;
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
        if(confirm('Are you sure you want to delete this task?')){
    let newListItem = deleteButton.parentNode;
    newListItem.parentNode.removeChild(newListItem);
        }
    })

    footerButton.addEventListener('click', function(){
        newListItem = "";
        unorderedList.innerText = newListItem;

    })

  

})


  //To strike out a task
    // newListItem.addEventListener('click', function(){
    //     newListItem.style.textDecoration = "line-through";
    // })

    // //To remove the strike
    // newListItem.addEventListener('dblclick', function(){
    //     newListItem.style.textDecoration = "none";
    // })










