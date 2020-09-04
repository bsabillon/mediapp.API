const express = require('express');
const router = express.Router();
const clinicMethods = require('../services/app/clinicsServices');


router.post('/add', clinicMethods.addClinic);
router.get('/', clinicMethods.getClinics);
router.get('/byId/:id?', clinicMethods.getClinicById);
router.put('/update/:id?', clinicMethods.updateClinic);
router.delete('/delete/:id?', clinicMethods.deleteClinic);



module.exports = router;