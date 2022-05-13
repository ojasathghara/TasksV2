const { Router } = require("express");
const crudService = require("../services/crud");

let crudRouter = Router();

crudRouter.get("/read", (req, res) => {
    res.send(crudService.getTodos());
});

crudRouter.post("/add", (req, res) => {
    console.log(req.body);
    let title = req.body.title;
    let description = req.body.description;

    let status = crudService.addTodo(title, description);
    // res.redirect("/");
    res.send(status);
});

crudRouter.post("/update/:key", (req, res) => {
    let key = parseInt(req.params.key);
    let title = req.body.title;
    let description = req.body.description;

    let status = crudService.updateTodo(key, title, description);
    // res.redirect("/");
    res.send(status);
});

crudRouter.post("/toggle/:key", (req, res) => {
    let key = parseInt(req.params.key);
    let status = crudService.toggleTodo(key);
    // res.redirect("/");
    res.send(status);
});

crudRouter.post("/delete/:key", (req, res) => {
    let key = parseInt(req.params.key);
    let status = crudService.deleteTodo(key);
    // res.redirect("/");
    res.send(status);
});

module.exports = crudRouter;
