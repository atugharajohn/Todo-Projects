let submited = document.getElementById("submited");
let inputVal = document.querySelector(".inputVal");
let addBtn = document.querySelector(".addBtn");
let child = document.querySelector(".todo-list-element");

submited.addEventListener("submit", (e) => {
  if (inputVal.value == "") {
    alert("please enter the text");
  } else {
    let element = document.createElement("div");
    let liVal = document.createElement("li");
    let createBtn = document.createElement("button");
    createBtn.classList.add("todoListBtn");
    createBtn.innerHTML = '<i class="fa fa-close"></i>';
    element.classList.add("main-todo-div");
    liVal.innerHTML = inputVal.value;
    child.appendChild(element);
    element.appendChild(liVal);
    element.appendChild(createBtn);

    createBtn.addEventListener("click", (e) => {
      element.remove();
    });
  }
  inputVal.value = "";
});
