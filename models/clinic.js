const Sequelize = require('sequelize');
const database = require('../config/database');
const Doctor = require('../models/doctor');
const Specialty = require('./specialty');

const Clinic = database.define('clinics', {
    
   
    clinicName: {
        type:Sequelize.STRING
    },
    email: {
        type:Sequelize.STRING
    },
    phone: {
        type:Sequelize.STRING
    },
    address: {
        type:Sequelize.STRING
    },
},
{
    freezeTableName: true,
}
)

Clinic.hasMany(Doctor);
Clinic.hasMany(Specialty);



module.exports = Clinic;