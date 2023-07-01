var fs = require("fs");

const express = require("express");
const router = express.Router();

router.get("/chat", (req, res, next) => {
  console.log("inside chat");
  res.send(
    `<form action="/chat" method="POST" onSubmit="document.getElementById('username').value = localStorage.getItem('username')"> 
	<input id="username" type="hidden" name="username" /> 
	<input type="text" name="message" id="message"/>
	 <button type="submit">send chat</button> 
	 </form>`
  );
});

router.post("/chat", (req, res, next) => {
  console.log(req.body);

  fs.appendFile(
    "chat.txt",
    `${req.body.username}: ${req.body.message} | \r\n`,
    (err) => (err ? console.error(err) : console.log("saved"))
  );
  res.redirect("/");
});

module.exports = router;

// onsubmit="localStorage.getItem( document.getElementById('username').value)"
