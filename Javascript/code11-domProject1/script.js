const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
let items;



eventListener();

function eventListener() {
    form.addEventListener("submit", addNewItem);

    //delete an item
    taskList.addEventListener("click" , deleteItem);

    //delete all
    btnDeleteAll.addEventListener("click", deleteAllItems);
    
}

function deleteItem(e) {
    console.log(e);
    if (e.target.className=="fas fa-times") {
        e.target.parentElement.parentElement.remove();
    }
    e.preventDefault();
}

function deleteAllItems(e) {
    
    if (confirm("emin misin birader bak ?")) {
        if (confirm("bak oluuum??")) {
            if (confirm("iyi onayla da görim :D")) {
                taskList.innerHTML=" ";
            }
        }
    }

    
    e.preventDefault();
}

function createItem(text) {
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary"; 
    li.appendChild(document.createTextNode(text));

    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';

    li.appendChild(a); //add a to li
    taskList.appendChild(li); // add li to ul
}

function addNewItem(e) {
    
    if (input.value === " ") {
        alert("You didn't type anything.")
    }

    createItem(input.value);//input value

    setItemToLS(input.value);

    input.value = ''; //clear input
    e.preventDefault();

}

function loadItems() {

    items = getItemsFromLS();
    
    items.forEach(function(item) {
        createItem(item);
    });
}

function getItemsFromLS() {
    if (localStorage.getItem("items")===null) {
        items = [];
    }
    else{
        items = JSON.parse(localStorage.getItem("items"));
    }
}

function setItemToLS(text) {
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem("items", JSON.stringify(items));

}

