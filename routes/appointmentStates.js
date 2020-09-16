const express = require('express');
const router = express.Router();
const appointmentStateMethods = require('../services/app/appointmentStatesServices');


router.post('/add', appointmentStateMethods.addAppointmentState);
router.get('/', appointmentStateMethods.getAppointmentStates);
router.get('/byId/:id?', appointmentStateMethods.getAppointmentStateById);
router.put('/update/:id?', appointmentStateMethods.updateAppointmentState);
router.delete('/delete/:id?', appointmentStateMethods.deleteAppointmentState);



module.exports = router;