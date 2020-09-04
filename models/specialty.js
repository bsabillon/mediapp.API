const Sequelize = require('sequelize');
const database = require('../config/database');

const Specialty = database.define('specialties', {
    
   
    description: {
        type:Sequelize.STRING
    }
},
{
    freezeTableName: true,
}
)

module.exports = Specialty;