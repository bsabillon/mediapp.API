const Doctor = require('../../models/doctor');
const Specialty = require('../../models/specialty');
const sequelize = require('../../config/database');
const { QueryTypes } = require('sequelize');
const Schedule = require('../../models/schedule');
const Day = require('../../models/day');
const Hour = require('../../models/hour');


var doctorMethods ={


    addDoctor: function(request, response){
        Doctor.create(request.body)
            .then(doctor=>{
                response
                .status(200)
                .send('doctor added successfully');
                })
            .catch(error=>
                response.send("Error: "+ error))
    },

    getDoctors: function(request, response){
        Doctor.findAll()
            .then(doctor=>{
                response.json(doctor);
            })
            .catch((error)=>{
                response.send("Error: "+ error)
                })
    },
    getDoctorById: function(request, response){
        Doctor.findOne({
            include: [
                    {
                        model:Schedule,
                        include: [{
                            model: Day
                        },
                    {
                        model: Hour
                    }
                    ]
                    }
            ],
            where: {
                id: request.params.id
              } 
        })
        .then(doctor=>{
            response.json(doctor);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })        
    },

    getDoctorsByClinicId: function(request, response){
        const doctorsClinic = sequelize.query(
            `SELECT doctors.id, doctors."name", doctors."email", doctors."phone",  specialties."description"  
            from "doctors"
            INNER JOIN specialties on "specialties"."id"= "doctors"."specialtyId" 
            where "doctors"."clinicId" = '${request.params.clinicId}'
           ; `
           , {type: QueryTypes.SELECT}
        )
        .then(doctor=>{
            response.json(doctor);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })        
    },

    getDoctorsBySpecialtyId: function(request, response){
        const doctorsClinic = sequelize.query(
            `SELECT doctors.id, doctors."name", doctors."email", doctors."phone",  clinics."clinicName" , clinics."address" 
            from "doctors"
            INNER JOIN clinics on "clinics"."id"= "doctors"."clinicId" 
            where "doctors"."specialtyId" = '${request.params.specialtyId}'
            and "doctors"."clinicId" = '${request.params.clinicId}'
           ; `
           , {type: QueryTypes.SELECT}
        )
        .then(doctor=>{
            response.json(doctor);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })        
    },

    deleteDoctor: function(request,response){
        Doctor.destroy({
            where:{
                id: request.params.id
            }
        })
        .then(doctor=>{
            response
            .status(200)
            .send('doctor deleted successfully');
        })
        .catch(error=>
            response.send("Error: "+ error))

    },

    updateDoctor: function(request, response){
        
    }


}

module.exports= doctorMethods;