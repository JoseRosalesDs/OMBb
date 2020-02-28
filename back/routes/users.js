const express = require('express');
const router = express.Router()
const User = require("../models/user")
const passport = require('passport');


function isLogedIn(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
}
router.post('/login', passport.authenticate('local'), (req, res) => {
  console.log('USER', req.user)
  console.log("autentico Ok!!!!W")
  res.send(req.user)
})

router.post('/logout', (req, res) => {
  if (req.isAuthenticated()) {
    req.logout();
    res.redirect('/login')
  } else {
    res.redirect('/')
  }
})

router.post('/register', (req, res) => {
  console.log(req.body)
  User.create(req.body)
    .then(user => {
      console.log('usuario creado');

      console.log(user.dataValues)
      res.send(user)
    })
})

router.get('/private', isLogedIn, (req, res) => {
  if (req.isAuthenticated()) {
    req.logout();
    res.redirect('/login')
  } else {
    res.redirect('/')
  }
})

module.exports = router