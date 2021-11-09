import Nav from './Components/Nav';
import Home from './Components/Home';
import Project from './Components/Project';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Nav/>
        <>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/Project">
              <Project/>
            </Route>
          </Switch>
        </>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
