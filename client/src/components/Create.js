import { useState } from 'react'

const Create = () => {
  const [title, setTitle] = useState('')
  const [categories, setCategories] = useState('')
  const [difficulty, setDifficulty] = useState('easy')
  const [questions, setQuestions] = useState([
    {
      question: '',
      correct: '',
      otherAnswers: ['', '', '']
    }
  ])

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: '',
        correct: '',
        otherAnswers: ['', '', '']
      }
    ])
  }

  const editQuestion = (questionIndex) => (e) => {
    const newQuestions = [...questions]

    newQuestions[questionIndex].question = e.target.value

    setQuestions(newQuestions)
  }

  const editCorrectAnswer = (questionIndex) => (e) => {
    const newQuestions = [...questions]

    newQuestions[questionIndex].correct = e.target.value

    setQuestions(newQuestions)

  }
  
  const editAnswer = (questionIndex, answerIndex) => (e) => {
    const newQuestions = [...questions]

    newQuestions[questionIndex].otherAnswers[answerIndex] = e.target.value

    setQuestions(newQuestions)
  }

  const deleteQuestion = (index) => {
    setQuestions(questions.filter((question, i) => i !== index))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const body = {
      title,
      categories,
      difficulty,
      questions
    }

    fetch('/api/quizzes/create', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <label>
        Title: 
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Categories:
        <input type="text" value={categories} onChange={e => setCategories(e.target.value)} />
      </label>
      <br />
      <label>
        Difficulty:
        <select value={difficulty} onChange={e => setDifficulty(e.target.value)}>
          <option>easy</option>
          <option>medium</option>
          <option>hard</option>
        </select>
      </label>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <label>
              Question {index + 1}:
              <input type="text" value={question.question} onChange={editQuestion(index)} />
            </label>
            <div>
              <label>
                Correct answer:
                <input type="text" value={questions.correct} onChange={editCorrectAnswer(index)} />
              </label>
            </div>
            <div>
              <label>
                Other answers:
                <ul>
                  <li><input type="text" value={question.otherAnswers[0]} onChange={editAnswer(index, 0)} /></li>
                  <li><input type="text" value={question.otherAnswers[1]} onChange={editAnswer(index, 1)} /></li>
                  <li><input type="text" value={question.otherAnswers[2]} onChange={editAnswer(index, 2)} /></li>
                </ul>
              </label>
            </div>
            {(!!index || questions.length > 1) && (
              <button onClick={() => deleteQuestion(index)}>Delete question</button>
            )}
          </li>
        ))}
      </ul>
      <button onClick={addQuestion}>Add question</button>
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Create
