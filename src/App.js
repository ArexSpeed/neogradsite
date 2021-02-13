import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Build from './pages/Build';
import Docs from './pages/Docs';
import Main from './pages/Main';
import Nav from './pages/Nav';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/build' component={Build} />
          <Route exact path='/docs' component={Docs} />  
        </Switch>
      </Router>
        
    </div>
  );
}

export default App;
