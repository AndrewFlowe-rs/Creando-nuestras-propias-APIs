const router = require('express').Router();
const movies =  require('../../controllers/api/moviesControllerApi')

router.get('/api/movies', movies.listA);
router.post('/api/movies', movies.createA);
router.delete('/api/movies/:id', movies.destroyApi)

module.exports = router;