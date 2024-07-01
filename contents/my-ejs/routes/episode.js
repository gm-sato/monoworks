const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('episode', {
    title: 'Episode Page',
    message: 'Welcome to the Episode page!'
  });
});

module.exports = router;
