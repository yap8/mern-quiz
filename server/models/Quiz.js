const { Schema, model } = require('mongoose')

const questionSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  correct: String,
  answers: [String]
})

const quizSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  categories: [String],
  difficulty: {
    type: String
  },
  questions: [questionSchema],
}, {
  timestamps: true
})

module.exports = model('Quiz', quizSchema)
