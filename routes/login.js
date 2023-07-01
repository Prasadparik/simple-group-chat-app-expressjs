var fs = require("fs");

const express = require("express");
const router = express.Router();

router.get("/login", (req, res, next) => {
  res.send(`
  <form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/" method="POST">

  <input id="username" type="text" name"title">

  <button type="submit">Login</button>

</form> 
  `);
});

// router.post("/users", (req, res, next) => {
//   console.log(req.body.username);
//   res.redirect("/chat");
// });

module.exports = router;
