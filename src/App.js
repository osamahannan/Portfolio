import Nav from './Components/Nav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <div className=""></div>
      </div>
    </Router>
  );
}

export default App;
