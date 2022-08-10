const express = require('express');

const hbs = require('hbs');
require('dotenv').config();

const path = require('path');
const indexRouter = require('./routes/index.router');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'hbs');
hbs.registerPartials((path.join(process.env.PWD, 'views', 'partials')));
app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log('Server 3000 connected'));
