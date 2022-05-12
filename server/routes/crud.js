const TodoItem = require("../../models/TodoItem");
const { Router } = require("express");

let crudRouter = Router();

let todos = [];

crudRouter.get("/read", (req, res) => {
    res.send(JSON.stringify(todos));
});

crudRouter.post("/add", (req, res) => {
    let newTodo = new TodoItem(req.body.title, req.body.description);
    todos.push(newTodo);

    res.send(todos);
});

crudRouter.post("/update/:key", (req, res) => {
    let todo = todos.filter((todo) => {
        return (todo.key = req.params.key);
    })[0];

    todo.title = req.body.title;
    todo.description = req.body.description;
    todo.active = req.body.active;

    res.send(todo);
});

crudRouter.post("/delete/:key", (req, res) => {
    let todo = todos.filter((todo) => {
        return (todo.key = req.params.key);
    })[0];

    let idx = todos.indexOf(todo);
    todos.splice(idx, 1);

    res.send(todos);
});

module.exports = crudRouter;
