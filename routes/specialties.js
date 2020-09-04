const express = require('express');
const router = express.Router();
const specialtyMethods = require('../services/app/specialtiesServices');


router.post('/add', specialtyMethods.addSpecialty);
router.get('/', specialtyMethods.getSpecialties);
router.get('/byId/:id?', specialtyMethods.getSpecialtyById);
router.put('/update/:id?', specialtyMethods.updateSpecialty);
router.delete('/delete/:id?', specialtyMethods.deleteSpecialty);



module.exports = router;