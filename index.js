const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) =>
  res.send("Welcome to {{cookiecutter.component_id}}!")
);

app.listen(port, () =>
  console.log(
    `{{cookiecutter.component_id}} listening at http://localhost:${port}`
  )
);
