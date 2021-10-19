import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Constructor from './components/Constructor';
import Game from './components/Game';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="play">
            <Game />
          </Route>
          <Route path="create">
            <Constructor />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
