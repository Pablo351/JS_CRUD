var express = require('express');
const { addUser, getAllUsers , getUserbyID , updateUserById, deleteById, getUsersByProvince} = require('../controllers/user.controller');
var router = express.Router();

router.get('/',getAllUsers);
router.get('/province',getUsersByProvince);
router.post('/new', addUser);
router.get('/:id',getUserbyID);
router.patch('/:id',updateUserById );
router.delete('/:id',deleteById);


module.exports = router;