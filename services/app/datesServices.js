const Date = require('../../models/date');

var dateMethods ={


    addDate: function(request, response){
        Date.create(request.body)
            .then(date=>{
                response
                .status(200)
                .send(date);
                })
            .catch(error=>
                response.send("Error: "+ error))
    },

    getDates: function(request, response){
        Date.findAll()
            .then(date=>{
                response.json(date);
            })
            .catch((error)=>{
                response.send("Error: "+ error)
                })
    },
    getDateById: function(request, response){
        Date.findAll({
            where: {
                id: request.params.id
              } 
        })
        .then(date=>{
            response.json(date);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })        
    },

    deleteDate: function(request,response){
        Date.destroy({
            where:{
                id: request.params.id
            }
        })
        .then(date=>{
            response
            .status(200)
            .send('date deleted successfully');
        })
        .catch(error=>
            response.send("Error: "+ error))

    },

    updateDate: function(request, response){
        
    }


}

module.exports= dateMethods;