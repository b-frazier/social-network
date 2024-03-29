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
    console.log(req.params.userId);
    User.findById({ _id: req.params.userId })
      .select('-__v')
      .populate('thoughts')
      .populate('friends')
      .then((user) =>
        user
          ? res.json(user)
          : res.status(404).json({ message: 'No user found with that ID' })
      )
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  // post a user
  postUser(req, res) {
    User.create(req.body)
      .then((post) => res.json(post))
      .catch((err) => res.status(500).json(err));
  },
  // update a user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        user
          ? res.json(user)
          : res.status(404).json({ message: 'No user found with that ID' })
      )
      .catch((err) => res.status(500).json(err));
  },
  // add a friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendsId } },
      { runValidators: true, new: true }
    )
      .populate('friends')
      .then((user) =>
        user
          ? res.json(user)
          : res.status(404).json({ message: 'No user found with that ID' })
      )
      .catch((err) => res.status(500).json(err));
  },
  // delete a friend
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendsId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        user
          ? res.json(user)
          : res.status(404).json({ message: 'No friend found with that ID' })
      )
      .catch((err) => res.status(500).json(err));
  },
  // delete a user
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        user
          ? User.findOneAndUpdate(
              { users: req.params.userId },
              { $pull: { users: req.params.userId } },
              { new: true }
            )
          : res.status(404).json({ message: 'No user found' })
      )
      .then((thought) =>
        thought
          ? res.json({ message: 'User has been deleted!' })
          : res
              .status(404)
              .json({ message: 'User deleted and no thoughts found' })
      )
      .catch((err) => res.status(500).json(err));
  },
};
