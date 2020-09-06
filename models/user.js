const Sequelize = require('sequelize');
const database = require('../config/database');
//const Role = require('../model/role');

const User = database.define('users', {
    
   
    name: {
        type:Sequelize.STRING
    },
    lastname: {
        type:Sequelize.STRING
    },
    phone: {
        type:Sequelize.STRING
    },
    password: {
        type:Sequelize.STRING
    },
    documentId: {
        type:Sequelize.STRING
    },
    email: {
        type:Sequelize.STRING
    },
    age: {
        type:Sequelize.STRING
    },
    
},
{
    freezeTableName: true,
}
)

//User.hasOne(Role);



module.exports = User;