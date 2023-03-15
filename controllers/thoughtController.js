const router = require('express').Router();
const Thought = require('../models');

module.exports = {
  // get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // get thoughts by id
  getOneThought(req, res) {
    Thought.findOne({ _id: req.params.thoughId })
      .then((thought) =>
        thought
          ? res.json(thought)
          : res.status(404).json({ message: 'No thoughts found' })
      )
      .catch((err) => res.json(500).json(err));
  },
};
