const AppointmentState = require('../../models/appointmentState');

var appointmentStateMethods ={


    addAppointmentState: function(request, response){
        AppointmentState.create(request.body)
            .then(appointmentState=>{
                response
                .status(200)
                .send(appointmentState);
                })
            .catch(error=>
                response.send("Error: "+ error))
    },

    getAppointmentStates: function(request, response){
        AppointmentState.findAll()
            .then(appointmentState=>{
                response.json(appointmentState);
            })
            .catch((error)=>{
                response.send("Error: "+ error)
                })
    },
    getAppointmentStateById: function(request, response){
        AppointmentState.findAll({
            where: {
                id: request.params.id
              } 
        })
        .then(appointmentState=>{
            response.json(appointmentState);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })        
    },

    deleteAppointmentState: function(request,response){
        AppointmentState.destroy({
            where:{
                id: request.params.id
            }
        })
        .then(appointmentState=>{
            response
            .status(200)
            .send('appointmentState deleted successfully');
        })
        .catch(error=>
            response.send("Error: "+ error))

    },

    updateAppointmentState: function(request, response){
        
    }


}

module.exports= appointmentStateMethods;