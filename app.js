const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '/public/')));

// css and js sources selection - default our custom files if not from bootstrap
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
// end of css and js source
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // res.send('Hello from my library app');
  // res.sendFile(path.join(__dirname, 'views', 'index.html'));
  res.render('index', { list: ['a', 'b', 'c'], title: 'MyLibrary' });
});

app.listen(port, () => {
  // console.log(`listening on port ${chalk.green('3000')}`);
  debug(`listening on port ${chalk.green(port)}`);
});
