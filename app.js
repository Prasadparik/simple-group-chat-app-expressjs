const bodyParser = require("body-parser");
var fs = require("fs");

const loginRoute = require("./routes/login");
const messageRoute = require("./routes/message");

const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(messageRoute);
app.use(loginRoute);
app.use("/", (req, res, next) => {
  fs.readFile("chat.txt", "utf8", function (err, data) {
    console.log(data);
    res.send(data);
  });
  console.log("readFile called");
  //   res.redirect("/");
});

app.use((req, res, next) =>
  res.status(404).send("<h1>404 Page not found! :(</h1>")
);

app.listen(3000);
