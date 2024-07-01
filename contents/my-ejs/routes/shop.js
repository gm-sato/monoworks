const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('shop', {
    title: 'Shop Page',
    message: 'Welcome to the Shop page!'
  });
});

module.exports = router;
