import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Build from './pages/Build';
import Docs from './pages/Docs';
import Main from './pages/Main';
import Nav from './pages/Nav';
import City from './examples/City/City';
import Budget from './examples/Budget/Budget';
import Relax from './examples/Relax/Relax';
import AISite from './examples/AISite/AISite';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/build' component={Build} />
          <Route exact path='/docs' component={Docs} />  
          <Route path='/example/city' component={City} />  
          <Route path='/example/budget' component={Budget} />  
          <Route path='/example/relax' component={Relax} />  
          <Route path='/example/aisite' component={AISite} />  

        </Switch>
      </Router>
        
    </div>
  );
}

export default App;
