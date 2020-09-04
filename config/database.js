const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://qgxzosjifaqdod:867df293cb0105273e3381b0e3db5f7946b412af1321d4126aabb05ab33d46a6@ec2-50-17-90-177.compute-1.amazonaws.com:5432/dc6kqnngdd2u64',{
    host:'ec2-50-17-90-177.compute-1.amazonaws.com',
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false // <<<<<<< YOU NEED THIS
        }
      },
    pool: {
        max:10,
        min:0,
        acquire: 30000,
        idle: 10000
    }
});


     sequelize.sync({ alter: true })
       .then(() => {
        console.log(`Database & tables created!`)
       })



  module.exports  = sequelize;