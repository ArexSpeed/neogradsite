import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Build from './components/Build';
import Docs from './components/Docs';
import Main from './components/Main';
import Nav from './components/Nav';

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
