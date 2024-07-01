const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('character', {
    title: 'Character Page',
    message: 'Welcome to the Character page!'
  });
});

module.exports = router;
