const todoList = [];

function handleAdd() {
  const v = document.querySelector(".js-input").value;
  todoList.push(v);
  refreshList();
}

function handleEnterKeyDown(e) {
  if (e.key === "Enter") {
    handleAdd();
  }
}

function refreshList() {
  const e = document.querySelector(".js-list");
  let list = "";
  todoList.forEach(element => {
    list += `${element}<br />`;
  });
  e.innerHTML = list;
}