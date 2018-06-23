const experss = require("express");
const path = require("path");

const app = experss();

const PATH_TO_FILE = path.resolve(__dirname, "../data/MOCK_DATA.json");
console.log(PATH_TO_FILE);

app.get("/users", (req, res) => {});

module.exports = app;
