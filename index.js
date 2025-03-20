require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const json = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Hello Twitter!");
});

app.get("/login", (req, res) => {
  res.send("<h1>Hello Login!</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Hello Youtube!</h2>");
});

app.get("/json", (req, res) => {
  res.json(json);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
