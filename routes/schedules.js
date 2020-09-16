const express = require('express');
const router = express.Router();
const scheduleMethods = require('../services/app/schedulesServices');


router.post('/add', scheduleMethods.addSchedule);
router.get('/', scheduleMethods.getSchedules);
router.get('/byId/:id?', scheduleMethods.getScheduleById);
router.put('/update/:id?', scheduleMethods.updateSchedule);
router.delete('/delete/:id?', scheduleMethods.deleteSchedule);



module.exports = router;