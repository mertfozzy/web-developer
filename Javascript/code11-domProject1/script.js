const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

eventListener();

function eventListener() {
    form.addEventListener("submit", addNewItem);

    //delete an item
    taskList.addEventListener("click" , deleteItem);

    //delete all
    btnDeleteAll.addEventListener("click", deleteAllItems);
    
}

function addNewItem(e) {
    
    if (input.value === " ") {
        alert("You didn't type anything.")
    }

    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary"; 
    li.appendChild(document.createTextNode(input.value));

    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';

    li.appendChild(a); //add a to li
    taskList.appendChild(li); // add li to ul
    input.value = ''; //clear input


    console.log(li);

    e.preventDefault();

}

function deleteItem(e) {
    console.log(e);
    if (e.target.className=="fas fa-times") {
        e.target.parentElement.parentElement.remove();
    }
    e.preventDefault();
}

function deleteAllItems(e) {
    
    taskList.innerHTML=" ";
    e.preventDefault();
}