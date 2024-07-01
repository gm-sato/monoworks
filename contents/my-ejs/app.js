const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// ルートのインポート
const indexRouter = require('./routes/index');
const characterRouter = require('./routes/character');
const storyRouter = require('./routes/story');
const episodeRouter = require('./routes/episode');
const shopRouter = require('./routes/shop');

// ルートの使用
app.use('/', indexRouter);
app.use('/character', characterRouter);
app.use('/story', storyRouter);
app.use('/episode', episodeRouter);
app.use('/shop', shopRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
