const todolist = [] ;

renderTodoList();

function renderTodoList(){
  let todoListHTML = "";
  for(let i = 0 ; i<todolist.length;i++){
    const todo = todolist[i];
    // const name = todo.name;
    // const duedate = todo.duedate;
    const { name, duedate }=todo;
    const html = `
    <div>${name}</div>
    <div>${duedate}</div>
    <button onclick="
      todolist.splice(${i},1);
      renderTodoList();
    "
    class="delete-button"
    >
      Delete
    </button>`;
    todoListHTML += html ;
  }
  document.querySelector(".js-para").innerHTML = todoListHTML ;
}

function addTodo(){
  const inputElement = document.querySelector(".js-input");
  const name = inputElement.value;
  const inputDuedate = document.querySelector(".js-duedate");
  const duedate = inputDuedate.value;
  todolist.push({
    name,
    duedate
  });
  inputElement.value = "";
  inputDuedate.value = "";
  renderTodoList();

}