const router = require('express').Router()
const {
  quiz_get,
  quiz_post
} = require('../controllers/quizController')

router.get('/', quiz_get)
router.post('/', quiz_post)

module.exports = router
