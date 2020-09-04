const Clinic = require('../../models/clinic');

var clinicMethods ={


    addClinic: function(request, response){
        Clinic.create(request.body)
            .then(clinic=>{
                response
                .status(200)
                .send('clinic added successfully');
                })
            .catch(error=>
                response.send("Error: "+ error))
    },

    getClinics: function(request, response){
        Clinic.findAll()
            .then(clinic=>{
                response.json(clinic);
            })
            .catch((error)=>{
                response.send("Error: "+ error)
                })
    },
    getClinicById: function(request, response){
        Clinic.findAll({
            where: {
                id: request.params.id
              } 
        })
        .then(clinic=>{
            response.json(clinic);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })        
    },

    deleteClinic: function(request,response){
        Clinic.destroy({
            where:{
                id: request.params.id
            }
        })
        .then(clinic=>{
            response
            .status(200)
            .send('clinic deleted successfully');
        })
        .catch(error=>
            response.send("Error: "+ error))

    },

    updateClinic: function(request, response){
        
    }


}

module.exports= clinicMethods;