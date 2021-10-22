import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import { CardActionArea, CardContent, Grid } from '@mui/material'

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
    <Container>
      <Typography
        variant="h2"
        component="h1"
        align="center"
        sx={{ mb: '32px' }}
      >
        Quizzes
      </Typography>
      {quizzes.length ? (
        <Grid container>
          {quizzes.map(quiz => (
            <Grid xs="4" item key={quiz._id}>
              <Card>
                <CardActionArea component={Link} to={`/quizzes/${quiz._id}`}>
                  <CardContent>
                    <Typography variant="h3" color="primary" gutterBottom>{quiz.title}</Typography>
                    <Typography>Categories: {quiz.categories}</Typography>
                    <Typography>Difficulty: {quiz.difficulty}</Typography>
                    <Typography>Number of questions: {quiz.questions.length}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <h2>no quizzes fetched :(</h2>
      )}
    </Container>
  )
}

export default Quizzes
