const Sequelize = require('sequelize');
const database = require('../config/database');


const Hour = database.define('hours', {
    
    hour: {
        type:Sequelize.STRING
    }
},
{
    freezeTableName: true,
}
)





module.exports = Hour;