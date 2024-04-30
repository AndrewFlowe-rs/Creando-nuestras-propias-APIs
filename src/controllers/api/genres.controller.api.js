const db = require('../database/models');

module.exports = {
    list : (req,res) => {
        db.Genre.findAll()
        .then(genres => {
            res.status(200).json({
                meta : {
                    status :200 ,
                    total : genress.lenght,
                    url:'api/genres'
                },
                data : genres
            })
        })
        .catch(err =>{
            res.status(500).json({
                ok: false,
                msg: err.message
            })
        })
    },
    }

