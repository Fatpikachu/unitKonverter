import React, { Component } from 'react';
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
import TempConverter from './TempConverter';

class App extends Component {
  constructor() {
    super();
  }
  convertUnits(e) {
    let numberOfUnits = +e.target.value;
    if (isNaN(numberOfUnits)) {
      return;
    }
    this.setState((state) => {
      return { numberOfUnits }
    })
  }

  setConversionType(e) {
    let conversionType = e.target.value;
    this.setState((state) => {
      return { conversionType }
    })
  }

  convert(from, to, conversion, units) {
    return (conversion[from]/conversion[to]) * units
  }

  render(){
    return (
      <div className="App">
        <div className='title-container'>
        <div className='title'>Unit Konverter</div>
      </div>
        <HashRouter>
          <div className="viewport">
            <Nav />
            <div className="content">
            <Route exact path="/liquid" render={(props) => 
                <LiquidConverter convertUnits={this.convertUnits}
                                setConversionType={this.setConversionType}
                                convert={this.convert} 
                                {...props} />} />
              <Route exact path="/length" render={(props) => 
                <LengthConverter convertUnits={this.convertUnits}
                                setConversionType={this.setConversionType}
                                convert={this.convert} 
                                {...props} />} />
              <Route exact path="/weight" render={(props) => 
                <WeightConverter convertUnits={this.convertUnits}
                                setConversionType={this.setConversionType}
                                convert={this.convert} 
                                {...props} />} />
              <Route exact path="/temperature" render={(props) => 
                <TempConverter convertUnits={this.convertUnits}
                                setConversionType={this.setConversionType}
                                convert={this.convert} 
                                {...props} />} />
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
