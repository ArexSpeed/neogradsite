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
import Hero from './components/Hero';
import Builder from './components/Builder';

function App() {
  return (
    <div className="App">
      
      <Hero />
      <Builder />
        
    </div>
  );
}

export default App;
