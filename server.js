// install packages
const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

// initialize express
const app = express();

const PORT = process.env.PORT || 3001;

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URL);
