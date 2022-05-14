const { Router } = require("express");
const crudService = require("../services/crud");
const multer = require("multer");

let crudRouter = Router();
let upload = multer();

crudRouter.get("/read", (req, res) => {
    res.send(crudService.getTodos());
});

crudRouter.post("/add", upload.fields([]), (req, res) => {
    console.log(req.body);
    let title = req.body.title;
    let description = req.body.description;

    let todo = crudService.addTodo(title, description);
    res.send(todo);
});

crudRouter.post("/update/:key", upload.fields([]), (req, res) => {
    let key = parseInt(req.params.key);
    let title = req.body.title;
    let description = req.body.description;

    let updatedTodo = crudService.updateTodo(key, title, description);
    res.send(updatedTodo);
});

crudRouter.post("/toggle/:key", (req, res) => {
    let key = parseInt(req.params.key);
    let toggledTodo = crudService.toggleTodo(key);
    res.send(toggledTodo);
});

crudRouter.post("/delete/:key", (req, res) => {
    let key = parseInt(req.params.key);
    let deletedTodoKey = crudService.deleteTodo(key);
    res.send(deletedTodoKey);
});

module.exports = crudRouter;
