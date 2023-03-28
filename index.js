const express = require("express");
const ejs = require("ejs");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

const PORT = 3000;

app.listen(PORT, () => {
  console.log("App listening on port ", PORT);
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/profile", (req, res) => {
  res.render("profile");
});

app.get("/math", (req, res) => {
  res.render("math");
});

app.get("/faq", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/", "faq.html"));
});

app.get("/terms", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/", "terms.html"));
});

app.get("/slide-show", (req, res) => {
  res.render("slide-show");
});