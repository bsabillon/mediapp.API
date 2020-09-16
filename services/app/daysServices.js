const Day = require('../../models/day');

var dayMethods ={


    addDay: function(request, response){
        Day.create(request.body)
            .then(day=>{
                response
                .status(200)
                .send(day);
                })
            .catch(error=>
                response.send("Error: "+ error))
    },

    getDays: function(request, response){
        Day.findAll()
            .then(day=>{
                response.json(day);
            })
            .catch((error)=>{
                response.send("Error: "+ error)
                })
    },
    getDayById: function(request, response){
        Day.findAll({
            where: {
                id: request.params.id
              } 
        })
        .then(day=>{
            response.json(day);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })        
    },

    deleteDay: function(request,response){
        Day.destroy({
            where:{
                id: request.params.id
            }
        })
        .then(day=>{
            response
            .status(200)
            .send('day deleted successfully');
        })
        .catch(error=>
            response.send("Error: "+ error))

    },

    updateDay: function(request, response){
        
    }


}

module.exports= dayMethods;