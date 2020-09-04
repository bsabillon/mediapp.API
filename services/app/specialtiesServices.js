const Specialty = require('../../models/specialty');

var specialtyMethods ={


    addSpecialty: function(request, response){
        Specialty.create(request.body)
            .then(Specialty=>{
                response
                .status(200)
                .send('Specialty added successfully');
                })
            .catch(error=>
                response.send("Error: "+ error))
    },

    getSpecialties: function(request, response){
        Specialty.findAll()
            .then(Specialty=>{
                response.json(Specialty);
            })
            .catch((error)=>{
                response.send("Error: "+ error)
                })
    },
    getSpecialtyById: function(request, response){
        Specialty.findAll({
            where: {
                id: request.params.id
              } 
        })
        .then(Specialty=>{
            response.json(Specialty);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })        
    },

    deleteSpecialty: function(request,response){
        Specialty.destroy({
            where:{
                id: request.params.id
            }
        })
        .then(Specialty=>{
            response
            .status(200)
            .send('Specialty deleted successfully');
        })
        .catch(error=>
            response.send("Error: "+ error))

    },

    updateSpecialty: function(request, response){
        
    }


}

module.exports= specialtyMethods;