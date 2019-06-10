import React, { Component } from 'react';
import { toTeaSpoon, toTableSpoon, toOunces, toPints, toQuarts } from './utils/index';

class LiquidConverter extends Component {
  constructor() {
    super();
    this.state = {
      conversionType: 'tea-spoons',
      numberOfUnits: 0,
      teaSpoons: 0,
      tableSpoons: 0,
      ounces: 0,
      pints: 0,
      quarts: 0,
    };
  }

  convertUnits = (e) => {
    let numberOfUnits = +e.target.value;
    if (isNaN(numberOfUnits)) {
      return;
    }
    this.setState((state) => {
      return { numberOfUnits }
    })
  }

  setConversionType = (e) => {
    let conversionType = e.target.value;
    this.setState((state) => {
      return { conversionType }
    })
  }

  RoundToHundredths = (val) => {
    return (Math.round(val * 100) / 100);
  };


  render() {
    let Units = [
      {label: 'Tea Spoons', value: toTeaSpoon(this.state.conversionType, this.state.numberOfUnits)},
      {label: 'Table Spoons', value: toTableSpoon(this.state.conversionType, this.state.numberOfUnits)},
      {label: 'Ounces', value: toOunces(this.state.conversionType, this.state.numberOfUnits)},
      {label: 'Pints', value: toPints(this.state.conversionType, this.state.numberOfUnits)},
      {label: 'Quarts', value: toQuarts(this.state.conversionType, this.state.numberOfUnits)},
    ];
    return (
      <React.Fragment>
        <div className='input-group'>
          <input onChange={this.convertUnits} id='name' type='number' className='input-form' />
            <select onChange={this.setConversionType} className='drop-down' id='type'>
              <option defaultValue value='tea-spoons'>Tea Spoons</option>
              <option value='table-spoons'>Table Spoons</option>
              <option value='ounces'>Ounces</option>
              <option value='pints'>Pints</option>
              <option value='quarts'>Quarts</option>
            </select>
        </div>
        {Units.map((unit, i) => {
        return (
          <div className='answer' key={i}>
            <div className='card-block'>
              <h4>{unit.label}</h4>
              <div>{this.RoundToHundredths(unit.value)}</div>
            </div>
          </div>
        )
      })};
      </React.Fragment>
    );
  }

}

export default LiquidConverter;