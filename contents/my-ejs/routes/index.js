const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'TOP Page',
    message: 'Welcome to the TOP page!'
  });
});

module.exports = router;
