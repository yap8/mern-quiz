import {
  Link
} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Welcome to quiz game</h1>
      <ul>
        <li>
          <Link to="/quizzes">Select a quiz</Link>
        </li>
        <li>
          <Link to="/constructor">Create a quiz</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
