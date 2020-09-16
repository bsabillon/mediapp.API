const express = require('express');
const router = express.Router();
const appointmentMethods = require('../services/app/appointmentsServices');


router.post('/add', appointmentMethods.addAppointment);
router.get('/byUserId/:userId?', appointmentMethods.getAppointments);
router.get('/byId/:id?', appointmentMethods.getAppointmentById);
router.get('/ifAppointment/:doctorId?/:dateId?/:hourId?/', appointmentMethods.verifyIfAppointment);
router.put('/update/:id?', appointmentMethods.updateAppointment);
router.delete('/delete/:id?', appointmentMethods.deleteAppointment);



module.exports = router;