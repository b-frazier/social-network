// install packages
const express = require('express');
require('dotenv').config();

// routes
const db = require('./config/connection');
const routes = require('./routes');

// initialize express
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Running on port ${PORT} and connected to mongoose`);
  });
});
