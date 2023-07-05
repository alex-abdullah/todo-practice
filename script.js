
const form = document.querySelector('form');
const input = document.querySelector("[name='todo']");
const todoList = document.getElementById('todos');

const existingToDoItems = JSON.parse(localStorage.getItem('todos')) || [];
const todoData = [];

existingToDoItems.forEach(todo => {
    addTodo(todo)
});

function addTodo(todoItem) {
    todoData.push(todoItem);
    const li = document.createElement('li');
    li.innerHTML = todoItem;
    todoList.appendChild(li);
    localStorage.setItem('todos', JSON.stringify(todoData));
    input.value = '';
}

function deleteTodos(){
    const allElements = Array.from(document.getElementsByTagName('li'));
    allElements.forEach((element) => element.remove());
    localStorage.clear();
}

form.onsubmit = (event) => {
    event.preventDefault();
    addTodo(input.value);
}