const express = require('express');
const router = express.Router();

// Signup
router.post('/signup', (req, res) => {});

// Signin
router.post('/signin', (req, res) => {});

// User
router.get('/', (req, res) => {
  res.send('Users');
});

module.exports = router;
