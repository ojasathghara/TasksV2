const { Router } = require("express");
const path = require("path");

let staticRouter = Router();
const buildPath = path.join(__dirname, "../../build");

staticRouter.get("/", (req, res) => {
    console.log(buildPath);
    res.sendFile(path.join(buildPath, "index.html"));
});

module.exports = staticRouter;
