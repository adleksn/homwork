"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`;

const getNewTodoId = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};


const form = document.querySelector(".form");
const input = document.querySelector(".input");
const todosContainer = document.querySelector(".todos");

function createTodoElement(todo) {
  const li = document.createElement("li");
  li.classList.add("todo");
  if (todo[todoKeys.is_completed]) {
    li.classList.add("completed");
  }

  li.innerHTML = `
    <div class="todo-text">${todo[todoKeys.text]}</div>
    <div class="todo-actions">
      <button class="button-complete button">&#10004;</button>
      <button class="button-delete button">&#10006;</button>
    </div>
  `;

  li.querySelector(".button-complete").addEventListener("click", () => {
    completeTodoById(todos, todo[todoKeys.id]);
    li.classList.toggle("completed");
  });

  li.querySelector(".button-delete").addEventListener("click", () => {
    deleteTodoById(todos, todo[todoKeys.id]);
    li.remove();
  });

  return li;
}

function handleCreateTodo(todos, text) {
  const newTodo = createTodo(todos, text);
  const todoElement = createTodoElement(newTodo);
  todosContainer.append(todoElement);
}

form.addEventListener("submit", event => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  handleCreateTodo(todos, text);
  input.value = "";
});



// При помощи метода querySelector получаем элементы .form, .input и .todos
// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки
// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement
