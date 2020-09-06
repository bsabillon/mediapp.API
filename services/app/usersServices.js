const User = require('../../models/user');

var userMethods ={


    addUser: function(request, response){
        User.create(request.body)
            .then(user=>{
                response
                .status(200)
                .send('user added successfully');
                })
            .catch(error=>
                response.send("Error: "+ error))
    },

    getUsers: function(request, response){
        User.findAll()
            .then(user=>{
                response.json(user);
            })
            .catch((error)=>{
                response.send("Error: "+ error)
                })
    },
    getUserById: function(request, response){
        User.findAll({
            where: {
                id: request.params.id
              } 
        })
        .then(user=>{
            response.json(user);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })        
    },
    login: function(request, response){
        User.findOne({
            where: {
                email: request.params.email,
                password: request.body.password
              } 
        })
        .then(user=>{
            response.json(user);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })        
    },

    deleteUser: function(request,response){
        User.destroy({
            where:{
                id: request.params.id
            }
        })
        .then(user=>{
            response
            .status(200)
            .send('user deleted successfully');
        })
        .catch(error=>
            response.send("Error: "+ error))

    },

    updateUser: function(request, response){
        
    }


}

module.exports= userMethods;