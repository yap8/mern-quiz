import { Button, ButtonGroup, Container, Grid, Typography } from "@mui/material"

const Question = ({ question, nextQuestion, checkAnswer }) => {
  const handleClick = (value) => {
    checkAnswer(value)
    nextQuestion()
  }

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h3" align="center">{question.question}</Typography>
      <ButtonGroup>
        {question.answers.map(answer => (
          <Button variant="contained" onClick={(e) => handleClick(e.target.innerHTML)}>{answer}</Button>
        ))}
      </ButtonGroup>
    </Container>
  )
}

export default Question
