import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([])

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await fetch('/api/quizzes')
        const quizzes = await res.json()

        setQuizzes(quizzes)
      } catch (err) {
        console.log(err)
      }
    }

    fetchQuizzes()
  }, [])

  return (
    <div>
      <h1>Quizzes</h1>
      {quizzes.length ? (
        <ul>
          {quizzes.map(quiz => (
            <li>
              <Link to={`/quizzes/${quiz._id}`}>
                <h2>{quiz.title}</h2>
                <div>Categories:</div>
                <ul>
                  {quiz.categories.map(category => <li>{category}</li>)}
                </ul>
                <div>Difficulty: {quiz.difficulty}</div>
                <div>Number of questions: {quiz.questions.length}</div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h2>no quizzes fetched :(</h2>
      )}
    </div>
  )
}

export default Quizzes
