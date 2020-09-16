const Schedule = require('../../models/schedule');

var scheduleMethods ={


    addSchedule: function(request, response){
        Schedule.create(request.body)
            .then(schedule=>{
                response
                .status(200)
                .send(schedule);
                })
            .catch(error=>
                response.send("Error: "+ error))
    },

    getSchedules: function(request, response){
        Schedule.findAll()
            .then(schedule=>{
                response.json(schedule);
            })
            .catch((error)=>{
                response.send("Error: "+ error)
                })
    },
    getScheduleById: function(request, response){
        Schedule.findAll({
            where: {
                id: request.params.id
              } 
        })
        .then(schedule=>{
            response.json(schedule);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })        
    },

    deleteSchedule: function(request,response){
        Schedule.destroy({
            where:{
                id: request.params.id
            }
        })
        .then(schedule=>{
            response
            .status(200)
            .send('schedule deleted successfully');
        })
        .catch(error=>
            response.send("Error: "+ error))

    },

    updateSchedule: function(request, response){
        
    }


}

module.exports= scheduleMethods;