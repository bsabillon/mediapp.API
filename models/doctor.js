const Sequelize = require('sequelize');
const database = require('../config/database');
const Specialty = require('../models/specialty');

const Doctor = database.define('doctors', {
    
   
    name: {
        type:Sequelize.STRING
    },
    email: {
        type:Sequelize.STRING
    },
    phone: {
        type:Sequelize.STRING
    }
},
{
    freezeTableName: true,
}
)


Specialty.hasMany(Doctor);



module.exports = Doctor;