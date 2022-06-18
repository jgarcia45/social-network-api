const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// /api/thought
router.route('/').get(getAllThoughts);
// /api/thought/<thoughtID>
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);
// /api/thought/<userID>
router.route('/:userId').post(createThought);
// /api/thought/<reactions>
router.route('/:thoughtId/reaction').post(createReaction);
// /api/thought/<reactionsID>
router.route('/:thoughtId/reactions/:reactionsId').delete(deleteReaction);

module.exports = router;