const express = require("express");
const ejs = require("ejs");
const path = require("path");
const app = express();
const expressSession = require("express-session");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(expressSession({
  secret: "very secret key",
  resave: false,
  saveUninitialized: true,
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const PORT = 5000;

app.listen(PORT, () => {
  console.log("App listening on port ", PORT);
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/profile", (req, res) => {
  let user = req.session.user;


  res.render("profile", {user});
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

app.post("/update-profile", (req, res) => {
  console.log(req.body);

  req.session.user = req.body;

  res.redirect("/profile");

});