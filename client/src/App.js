import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Create from './pages/Create';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Quizzes from './pages/Quizzes';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/quizzes">
            <Quizzes />
          </Route>
          <Route path="/quizzes/create">
            <Create />
          </Route>
          <Route path="/quizzes/:id">
            <Quiz />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
