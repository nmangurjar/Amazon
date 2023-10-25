var express = require('express');
var router = express.Router();
const userModel = require("./users.js")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/signin', function(req, res, next) {
  res.render('signin');
});
router.get('/signup', function(req, res, next) {
  res.render('signup');
});
router.post('/createuser',  async function(req, res, next) {
    var user = await userModel.create({
      name :req.body.name ,
      number :req.body.number ,
      email :req.body.email ,
      password :req.body.password
    })
    res.render("indexnew",{user})
});

module.exports = router;
