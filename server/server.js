const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

// route files
const staticRoutes = require("./routes/static");
const crudRoutes = require("./routes/crud");

// setup variables
const port = process.env.PORT || 16500;
const buildPath = path.join(__dirname, "../build");

const app = express();

// setup encoders and authentication
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// static paths
app.use(express.static(buildPath));

// routes
app.use("/", staticRoutes);
app.use("/crud", crudRoutes);

app.listen(port, () => {
    console.log(`Serving on port ${port}`);
});
