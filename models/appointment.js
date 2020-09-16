const Sequelize = require('sequelize');
const database = require('../config/database');
const Clinic = require('./clinic');
const Doctor = require('./doctor');
const Specialty = require('./specialty');
const User = require('./user');
const Hour = require('./hour');
const AppointmentState = require('./appointmentState');
const Date = require('./date');

const Appointment = database.define('appointments', {
    
   
   
},
{
    freezeTableName: true,
}
)


Appointment.belongsTo(Clinic);
Appointment.belongsTo(Specialty);
Appointment.belongsTo(Doctor);
Appointment.belongsTo(User);
Appointment.belongsTo(Date);
Appointment.belongsTo(Hour);
Appointment.belongsTo(AppointmentState);



module.exports = Appointment;