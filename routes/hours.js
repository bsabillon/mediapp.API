const express = require('express');
const router = express.Router();
const hourMethods = require('../services/app/hoursServices');


router.post('/add', hourMethods.addHour);
router.get('/', hourMethods.getHours);
router.get('/byId/:id?', hourMethods.getHourById);
router.put('/update/:id?', hourMethods.updateHour);
router.delete('/delete/:id?', hourMethods.deleteHour);



module.exports = router;