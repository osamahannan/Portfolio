import Nav from './Components/Nav';
import Home from './Components/Home';
import Project from './Components/Project';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <div className="Home">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/Project">
              <Project/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
