const express = require('express');
const router = express.Router();
const userMethods = require('../services/app/usersServices');


router.post('/add', userMethods.addUser);
router.get('/', userMethods.getUsers);
router.get('/byId/:id?', userMethods.getUserById);
router.get('/login/:email?', userMethods.login);
router.put('/update/:id?', userMethods.updateUser);
router.delete('/delete/:id?', userMethods.deleteUser);


module.exports = router;