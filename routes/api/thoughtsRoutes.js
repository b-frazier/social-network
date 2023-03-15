const router = require('express').Router();
const {
  getThoughts,
  getOneThought,
  addThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts);
router.route('/:userId').post(addThought);
router
  .route('/:thoughtId')
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);
