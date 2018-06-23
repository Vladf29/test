const experss = require("express");
const path = require("path");
const fse = require("fs-extra");

const app = experss();

const PATH_TO_FILE = path.resolve(__dirname, "../data/MOCK_DATA.json");

const readData = async () => await fse.readJson(PATH_TO_FILE);

app.get("/users", async (req, res) => {
  try {
    const data = await readData();
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

app.get("/users/:username", async (req, res) => {
  try {
    const username = req.params["username"];
    const data = await readData();

    const foundUser = data.find(user => user.username === username);
    if (!foundUser) {
      res.status(404).json({ error: "User with the username wasn't found." });
      return;
    }

    res.json(foundUser);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

module.exports = app;
