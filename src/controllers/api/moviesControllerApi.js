const { where } = require('sequelize');
const db = require('../../database/models')

module.exports = {
    listA : (req ,res ) => {
        db.Movie.findAll()
        .then(movies=> {
            res.status(200).json({
                meta: {
                    status:200,
                    total:movies.length,
                    url:'api/movies'
                },
                data: movies
            })
        })
        .catch(err =>{
            res.status(500).json({
                ok: false,
                msg: err.message
            })
        })
    },
    

    createA: (req, res) => {
        const { title, rating, awards, release_date, length, genre_id } = req.body;

        db.Movie.create({
            title,
            rating,
            awards,
            release_date,
            length,
            genre_id
        })
            .then(movies => {
                res.status(201).json({
                    meta:{
                        status: 201,
                        total: movies.length,
                        url: 'api/movies'
                    },
                    data: movies
                })
            })
            .catch(err => {
                res.status(500).json({
                    ok: false,
                    msg: err.message
                })
            })
    },
    destroyApi: (req, res) => {
        const { id } = req.params;

        db.Movie.destroy({
            where:{
                id
            }
        })
        .then(movie => {
            res.status(200).json({
                meta:{
                    status: 200,
                    total: movie.length,
                    url: 'api/movies/' + id
                },
                data: movie
            })
        })
        .catch(err => {
            res.status(500).json({
                ok: false,
                msg: err.message
            })
        })
    }
}