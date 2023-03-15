const router = require('express').Router();
const {
  getThoughts,
  getOneThought,
  addThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController');
