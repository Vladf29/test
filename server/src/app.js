const express = require("express");

const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());

app.use("/api", require("./routers/api"));

app.listen(port, () => console.log(`Server running on port ${port}`));
