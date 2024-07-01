const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('story', {
    title: 'Story Page',
    message: 'Welcome to the Story page!'
  });
});

module.exports = router;
