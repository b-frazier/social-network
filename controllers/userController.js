const { ObjectId } = require('mongoose').Types;
const { User } = require('../models');

module.exports = {
  // get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // get one user
  getOneUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .populate('thoughts', 'friends')
      .then((user) =>
        user
          ? res.json(user)
          : res.status(404).json({ message: 'No user found with that ID' })
      )
      .catch((err) => res.status(500).json(err));
  },
};
