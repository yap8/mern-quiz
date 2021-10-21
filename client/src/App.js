import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Create from './components/Create';
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
