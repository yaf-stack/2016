const addBtn = document.querySelector(".add");
const resetBtn = document.querySelector(".reset");
let contentArea = document.querySelector(".todo-area");

addBtn.addEventListener("click", () => {
    let newTodoList = document.createElement("input");
    newTodoList.setAttribute("placeholder", "add your task");
    contentArea.appendChild(newTodoList);
    let doneTaskBtn = document.createElement("button");
    doneTaskBtn.setAttribute("class", "done");
    doneTaskBtn.innerText = "Done";
    contentArea.appendChild(doneTaskBtn);
    let removeBtn = document.createElement("button");
    removeBtn.setAttribute("class", "done");
    removeBtn.innerText = "remove";
    contentArea.appendChild(removeBtn);

    doneTaskBtn.addEventListener("click", () => {
        newTodoList.setAttribute("class", "line");
    });
    
    removeBtn.addEventListener("click", () => {
        newTodoList.remove();
        doneTaskBtn.remove();
        removeBtn.remove();
    })
});





