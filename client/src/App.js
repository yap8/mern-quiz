import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Constructor from './components/Constructor';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Quizzes from './components/Quizzes';

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
          <Route path="/quizzes/:id">
            <Quiz />
          </Route>
          <Route path="/create">
            <Constructor />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
