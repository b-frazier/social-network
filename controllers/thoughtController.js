const { Thought } = require('../models');
const { User } = require('../models');

module.exports = {
  // get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // get thoughts by id
  getOneThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        thought
          ? res.json(thought)
          : res.status(404).json({ message: 'No thoughts found' })
      )
      .catch((err) => res.json(500).json(err));
  },
  // add a thought
  addThought(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { thoughts: req.body } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        user
          ? res.json(user)
          : res.status(404).json({ message: 'No user found' })
      )
      .catch((err) => res.status(500).json(err));
  },
  // update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        thought
          ? res.json(thought)
          : res.status(404).json({ message: 'No thought found' })
      )
      .catch((err) => res.status(500).json(err));
  },
  // delete a thought
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) =>
        thought
          ? thought.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
          : res.status(404).json({ message: 'No thought found' })
      )
      .catch((err) => res.status(500).json(err));
  },
  // add a reaction
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        thought
          ? res.json(thought)
          : res.status(404).json({ message: 'No thought found' })
      )
      .catch((err) => res.status(500).json(err));
  },
  // delete reaction
  deleteReaction(req, res) {
    Thought.findOneAndRemove(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionsId: req.params.reactionsId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        thought
          ? res.json(thought)
          : res.status(404).json({ message: 'No thought found' })
      )
      .catch((err) => res.status(500).json(err));
  },
};
