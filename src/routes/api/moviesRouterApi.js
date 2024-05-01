const router = require('express').Router();
const movies =  require('../../controllers/api/moviesControllerApi')

router.post('/api/movies', movies.create)
router.delete('/api/movies/:id', movies.destroy)

module.exports = router;