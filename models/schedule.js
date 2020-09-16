const Sequelize = require('sequelize');
const database = require('../config/database');
const Day = require('./day');
const Doctor = require('./doctor');
const Hour = require('./hour');


const Schedule = database.define('schedule', {
    
   
   
},
{
    freezeTableName: true,
}
)


Schedule.hasMany(Day);
Schedule.hasMany(Hour);
Schedule.belongsTo(Doctor);
Doctor.hasOne(Schedule);


module.exports = Schedule;