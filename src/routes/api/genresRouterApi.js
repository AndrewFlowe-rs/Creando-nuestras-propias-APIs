const router = require('express').Router();
const genres =  require('../../controllers/api/genresControllerApi')

router.get('/api/genres', genres.list)
router.get('/api/genres/:id', genres.detail)

module.exports = router;