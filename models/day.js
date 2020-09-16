const Sequelize = require('sequelize');
const database = require('../config/database');


const Day = database.define('days', {
    
   
    name: {
        type:Sequelize.STRING
    }
},
{
    freezeTableName: true,
}
)





module.exports = Day;