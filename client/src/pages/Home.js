import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Typography
        variant="h2"
        component="h1"
        align="center"
        sx={{ mb: '32px' }}
      >
        Welcome to quiz game
      </Typography>
      <ButtonGroup>
        <Button
          component={Link}
          to="/quizzes"
          variant="contained"
        >
          Choose a quiz
        </Button>
        <Button
          component={Link}
          to="/quizzes/create"
          variant="contained"
        >
          Create a quiz
        </Button>
      </ButtonGroup>
    </Container>
  )
}

export default Home
