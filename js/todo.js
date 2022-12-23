const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos"

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(item => item.id !== parseInt(li.id))
    li.remove();
    saveToDos();    
}

function paintToDo(newTodoObject){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.id = newTodoObject.id;
    span.innerText = newTodoObject.text;
    const button = document.createElement("button");
    button.innerText = "❌"

    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObject = {
        text : newTodo,
        id : Date.now(),
    }
    toDos.push(newTodoObject)
    paintToDo(newTodoObject);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

function foreachValue(item) {
    console.log(`This is the turn of ${item}`);
}

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}


