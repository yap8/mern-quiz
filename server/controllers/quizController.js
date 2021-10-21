const Quiz = require('../models/Quiz')

module.exports.quiz_get = async (req, res) => {
  try {
    const quizzes = await Quiz.find()

    res.json(quizzes)
  } catch (err) {
    res.json(err)
  }
}

module.exports.quiz_post = async (req, res) => {
  try {
    const newQuiz = await Quiz.create(req.body)

    res.json(newQuiz)
  } catch (err) {
    res.json(err)
  }
}
