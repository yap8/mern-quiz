const router = require('express').Router()
const {
  quiz_get,
  quiz_post,
  quiz_one_get
} = require('../controllers/quizController')

router.get('/', quiz_get)
router.post('/', quiz_post)
router.get('/:id', quiz_one_get)

module.exports = router
