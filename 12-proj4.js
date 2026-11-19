class Todo {
  constructor(id, title, due) {
    this.id = id;
    this.title = title;
    this.due = due;
    this.completed = false;
  }

  complete() {
    this.completed = true;
  }
}

const todoList = [];

function handleAdd() {
  const title = document.querySelector(".js-input").value;
  let due = document.querySelector(".js-input-due").value;
  console.log(due);
  const v = new Todo(crypto.randomUUID(), title, due);
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
  todoList.forEach((element, ind) => {
    list += `
    <p>
      [${element.id}] ${element.title} ${element.due != "" ? `(${element.due})` : ""}
      <button class="todo-delete" id=${ind} onclick="handleDelete(${ind})">
        DELETE
      </button>
    </p>`;
  });
  e.innerHTML = list;
}

function handleDelete(index) {
  todoList.splice(index, 1);
  refreshList();
}