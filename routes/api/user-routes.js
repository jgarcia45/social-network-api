const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    createFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// /api/user
router.route('/').get(getAllUsers).post(createUser);
// /api/user/<userID>
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);
// /api/user/<friendID>
router.route('/:id/friend/:friendId').post(createFriend).delete(deleteFriend);

module.exports = router;