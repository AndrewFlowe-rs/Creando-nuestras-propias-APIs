const router = require('express').Router();
const genres =  require('../../controllers/api/genres.controller.api')


router.get('/api/genres', genres.list)
//router.get('/api/genres/:id', genres.detail)


module.exports = router;