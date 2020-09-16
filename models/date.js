const Sequelize = require('sequelize');
const database = require('../config/database');


const Date = database.define('date', {
    
   
    date: {
        type:Sequelize.STRING
    }
},
{
    freezeTableName: true,
}
)





module.exports = Date;