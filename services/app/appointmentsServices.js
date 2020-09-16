const Appointment = require('../../models/appointment');
const AppointmentState = require('../../models/appointmentState');
const Clinic = require('../../models/clinic');
const Day = require('../../models/day');
const Doctor = require('../../models/doctor');
const Hour = require('../../models/hour');
const Specialty = require('../../models/specialty');
const User = require('../../models/user');

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
        Appointment.findAll({
            include: [
            {
                model: AppointmentState
            },
            {
                model: Clinic
            },
            {
                model: Specialty
            },
            {
                model: User
            },
            {
                model: Doctor
            },
            {
                model: Day
            },
            {
                model: Hour
            }
        ],
        where: {
            userId: request.params.userId
          } 
        })
            .then(appointment=>{
                response.json(appointment);
            })
            .catch((error)=>{
                response.send("Error: "+ error)
                })
    },
    getAppointmentById: function(request, response){
        Appointment.findOne({
            include: [
                {
                    model: AppointmentState
                },
                {
                    model: Clinic
                },
                {
                    model: Specialty
                },
                {
                    model: User
                },
                {
                    model: Doctor
                },
                {
                    model: Day
                },
                {
                    model: Hour
                }],
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

    verifyIfAppointment: function(request, response){
        Appointment.findOne({
            include: [
                {
                    model: Clinic
                },
                {
                    model: Specialty
                },
                {
                    model: Doctor
                },
                {
                    model: Day
                },
                {
                    model: Hour
                }],
            where: {
                doctorId: request.params.doctorId,
                dayId: request.params.dayId,
                hourId: request.params.hourId
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