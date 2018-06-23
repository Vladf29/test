const express = require("express");
const morgan = require("morgan");

const app = express();

const port = process.env.PORT || 8000;

app.use(morgan('dev'));
app.use(express.json());

app.use("/api", require("./routers/api"));

app.listen(port, () => console.log(`Server running on port ${port}`));
