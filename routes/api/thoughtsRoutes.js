const router = require('express').Router();
const {
  getThoughts,
  getOneThought,
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts);
router.route('/:userId').post(addThought);
router
  .route('/:thoughtId')
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);
router.route('/:thoughtId/reactions').post(addReaction).delete(deleteReaction);

module.exports = router;
