const express = require("express");
const bodyParser = require("body-parser");
// const path = require("path");

const staticRoutes = require("./routes/static");
const crudRoutes = require("./routes/crud");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;
// const buildPath = path.join(__dirname, "../build");

// app.use(express.static(buildPath));

app.use("/", staticRoutes);
app.use("/crud", crudRoutes);

app.listen(port, () => {
    console.log(`Serving on port ${port}`);
});
