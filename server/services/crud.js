const TodoItem = require("../models/TodoItem");
const store = require("store2"); // a module that helps in local storage

let todos = [];

const initTodos = () => {
    let localItem = JSON.parse(store.get("todos"));
    localItem == null ? (todos = []) : (todos = localItem);
};

const setTodos = () => {
    store.set("todos", JSON.stringify(todos));
};

const getTodos = () => {
    initTodos();
    return todos;
};

const addTodo = (title, description) => {
    initTodos();
    let todoItem = new TodoItem(title, description);
    todos.push(todoItem);
    setTodos();
    return "Success: Todo added.";
};

const findTodoIdx = (key) => {
    let idx = -1;
    for (let i = 0; i < todos.length; i++) {
        console.log(todos[i]);
        if (todos[i].key === key) {
            idx = i;
            break;
        }
    }
    return idx;
};

const updateTodo = (key, title, description, active) => {
    initTodos();

    let todoItemIdx = findTodoIdx(key);
    if (todoItemIdx === -1) {
        return "Error: cannot find the required todo. Make sure you have requested the correct key.";
    }

    todos[todoItemIdx].title = title;
    todos[todoItemIdx].description = description;
    todos[todoItemIdx].active = active;
    setTodos();

    return `Success: Todo with key ${key} updated.`;
};

const deleteTodo = (key) => {
    initTodos();

    let todoItemIdx = findTodoIdx(key);
    if (todoItemIdx === -1) {
        return "Error: cannot find the required todo. Make sure you have requested the correct key.";
    }

    todos.splice(todoItemIdx, 1);
    setTodos();

    return `Success: Todo with key ${key} deleted.`;
};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };
