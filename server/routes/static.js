const { Router } = require("express");
const path = require("path");

let staticRouter = Router();
// const buildPath = path.join(__dirname, "../../build");

staticRouter.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "test.html"));
});

module.exports = staticRouter;
