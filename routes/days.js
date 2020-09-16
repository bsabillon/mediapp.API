const express = require('express');
const router = express.Router();
const dayMethods = require('../services/app/daysServices');


router.post('/add', dayMethods.addDay);
router.get('/', dayMethods.getDays);
router.get('/byId/:id?', dayMethods.getDayById);
router.put('/update/:id?', dayMethods.updateDay);
router.delete('/delete/:id?', dayMethods.deleteDay);



module.exports = router;