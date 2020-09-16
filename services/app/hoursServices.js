const Hour = require('../../models/hour');

var hourMethods ={


    addHour: function(request, response){
        Hour.create(request.body)
            .then(hour=>{
                response
                .status(200)
                .send(hour);
                })
            .catch(error=>
                response.send("Error: "+ error))
    },

    getHours: function(request, response){
        Hour.findAll()
            .then(hour=>{
                response.json(hour);
            })
            .catch((error)=>{
                response.send("Error: "+ error)
                })
    },
    getHourById: function(request, response){
        Hour.findAll({
            where: {
                id: request.params.id
              } 
        })
        .then(hour=>{
            response.json(hour);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })        
    },

    deleteHour: function(request,response){
        Hour.destroy({
            where:{
                id: request.params.id
            }
        })
        .then(hour=>{
            response
            .status(200)
            .send('hour deleted successfully');
        })
        .catch(error=>
            response.send("Error: "+ error))

    },

    updateHour: function(request, response){
        
    }


}

module.exports= hourMethods;