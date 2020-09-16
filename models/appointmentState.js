const Sequelize = require('sequelize');
const database = require('../config/database');


const AppointmentState = database.define('appointmentStates', {
    
    description: {
        type:Sequelize.STRING
    }
},
{
    freezeTableName: true,
}
)



module.exports = AppointmentState;