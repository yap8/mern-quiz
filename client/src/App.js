import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Constructor from './components/Constructor';
import Home from './components/Home';
import Quizzes from './components/Quizzes';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/quizzes">
            <Quizzes />
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
