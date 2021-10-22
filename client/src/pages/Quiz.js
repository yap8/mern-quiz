import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import Question from "../components/Question"
import { Container, Typography } from "@mui/material"

const Quiz = () => {
  const { id } = useParams()

  const [quiz, setQuiz] = useState({})
  const [current, setCurrent] = useState(0)
  const [mistakes, setMistakes] = useState(0)

  useEffect(() => {
    const fetchQuiz = async () => {
      const res = await fetch(`/api/quizzes/${id}`)
      const data = await res.json()

      setQuiz(data)
    }

    fetchQuiz()
  }, [id])

  const nextQuestion = () => {
    setCurrent(current + 1)
  }

  const checkAnswer = (answer) => {
    if (answer !== quiz.questions[current].correct) {
      setMistakes(mistakes + 1)
    }
  }

  return (
    <Container>
      <Typography variant="h4" component="h1" color="textSecondary" gutterBottom align="center">{quiz.title}</Typography>
      {Object.keys(quiz).length && current !== quiz.questions.length ? (
        <Question
          question={quiz.questions[current]}
          nextQuestion={nextQuestion}
          checkAnswer={checkAnswer}
        />
      ) : (
        <Typography variant="h2" component="h4">Mistakes: {mistakes}</Typography>
      )}
    </Container>
  )
}

export default Quiz
