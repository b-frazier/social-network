const router = require('express').Router();
const {
  getUsers,
  getOneUser,
  postUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(postUser);
