const TODOS = [
    {
        id: 1,
        title: "Go Shopping",
        isCompleted: false,
    },
    {
        id: 2,
        title: "Reading Book",
        isCompleted: true
    },
    {
        id: 3,
        title: "Walking the dog",
        isCompleted: true
    },
    {
        id: 4,
        title: "Playing Music",
        isCompleted: false
    }
];

//dom nodes
let addbtn = document.getElementById("addbtn");
let root = document.getElementById("root");
let input = document.querySelector("input");
let activebtn = document.getElementById("active");
let allbtn = document.getElementById("all");
let completebtn = document.getElementById("completed") ;
let span = document.getElementById("span");
//function
function render(list){
    root.innerHTML = "";
    for (const todo of list) {
       let template = `
    <li class = "${todo.isCompleted ?"done" : "" }">${todo.title}
    <button class="donebtn ${todo.isCompleted ?"undonebtn" : "" }" onclick = "doneBtn(${todo.id})">${todo.isCompleted ?"undone":"done"}</button></li>
    `

    root.innerHTML += template;

    }
    let leftItems = list.length;
    span.textContent = leftItems;

    
}

function AddTodo(){
    let object = {
    id : (TODOS.length+1),
    title : input.value,
    isCompleted : false,
}
TODOS.push(object);
render(TODOS)
input.value = "";
input.focus();
}

function doneBtn(todoId){ 
    let todo = TODOS.find(function(todo){
        return todo.id == todoId
    })
    if(todo.isCompleted== true){
        todo.isCompleted = false;
        render(TODOS)
    }else{
        todo.isCompleted = true;
        render(TODOS) 
    }

}

function allTODOS(){
    render(TODOS)
    let leftItems = TODOS.length;
    span.textContent = leftItems;
}

function activeTODOS(){
let activeList =[];

    for (const todo of TODOS) {
        if(todo.isCompleted == false){
            activeList.push(todo);
        }
    }
    render(activeList)
    let leftItems = activeList.length;
    span.textContent = leftItems;
}
function completeTODOS(){
    let completeList =[];
    
        for (const todo of TODOS) {
            if(todo.isCompleted == true){
                completeList.push(todo);
            }
        }
        render(completeList)
        let leftItems = completeList.length;
    span.textContent = leftItems;
    
    }
//events

render(TODOS);
addbtn.addEventListener("click", AddTodo)

allbtn.addEventListener("click" , allTODOS)
activebtn.addEventListener("click", activeTODOS)
completebtn.addEventListener("click", completeTODOS)
