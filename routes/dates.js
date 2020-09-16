const express = require('express');
const router = express.Router();
const dateMethods = require('../services/app/datesServices');


router.post('/add', dateMethods.addDate);
router.get('/', dateMethods.getDates);
router.get('/byId/:id?', dateMethods.getDateById);
router.put('/update/:id?', dateMethods.updateDate);
router.delete('/delete/:id?', dateMethods.deleteDate);



module.exports = router;