const express = require('express');
const router = express.Router();
const doctorMethods = require('../services/app/doctorsServices');


router.post('/add', doctorMethods.addDoctor);
router.get('/', doctorMethods.getDoctors);
router.get('/byId/:id?', doctorMethods.getDoctorById);
router.get('/byClinicId/:clinicId?', doctorMethods.getDoctorsByClinicId);
router.get('/bySpecialtyId/:specialtyId?', doctorMethods.getDoctorsBySpecialtyId);
router.put('/update/:id?', doctorMethods.updateDoctor);
router.delete('/delete/:id?', doctorMethods.deleteDoctor);



module.exports = router;