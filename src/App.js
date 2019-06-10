import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter,
} from 'react-router-dom';
import Nav from './navbar'
import LiquidConverter from './LiquidConverter';
import LengthConverter from './LengthConverter';
import WeightConverter from './WeightConverter';

function App() {
  return (
    <div className="App">
      <h1>Unit Konverter</h1>
      <HashRouter>
        <div className="viewport">
          <Nav />
          <div className="content">
            <Route exact path="/liquid" component={LiquidConverter} />
            <Route exact path="/length" component={LengthConverter} />
            <Route exact path="/weight" component={WeightConverter} />
          </div>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
