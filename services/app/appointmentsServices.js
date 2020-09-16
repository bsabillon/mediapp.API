const Appointment = require('../../models/appointment');

var appointmentMethods ={


    addAppointment: function(request, response){
        Appointment.create(request.body)
            .then(appointment=>{
                response
                .status(200)
                .send(appointment);
                })
            .catch(error=>
                response.send("Error: "+ error))
    },

    getAppointments: function(request, response){
        Appointment.findAll()
            .then(appointment=>{
                response.json(appointment);
            })
            .catch((error)=>{
                response.send("Error: "+ error)
                })
    },
    getAppointmentById: function(request, response){
        Appointment.findAll({
            where: {
                id: request.params.id
              } 
        })
        .then(appointment=>{
            response.json(appointment);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })        
    },

    deleteAppointment: function(request,response){
        Appointment.destroy({
            where:{
                id: request.params.id
            }
        })
        .then(appointment=>{
            response
            .status(200)
            .send('appointment deleted successfully');
        })
        .catch(error=>
            response.send("Error: "+ error))

    },

    updateAppointment: function(request, response){
        
    }


}

module.exports= appointmentMethods;