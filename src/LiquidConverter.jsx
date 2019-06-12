import React, { Component } from 'react';
import { toTeaSpoon, toTableSpoon, toOunces, toPints, toQuarts } from './utils/index';

class LiquidConverter extends Component {
  constructor() {
    super();
    this.state = {
      conversionType: 'tea-spoons',
      numberOfUnits: 0,
    };
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
        <div className='converter-container'>
        <div className='input-group'>
          <input onChange={this.props.convertUnits.bind(this)} id='name' type='number' className='input-form' />
          <div className='drop-down'>
            <select onChange={this.props.setConversionType.bind(this)} id='type'>
              <option defaultValue value='tea-spoons'>Tea Spoons</option>
              <option value='table-spoons'>Table Spoons</option>
              <option value='ounces'>Ounces</option>
              <option value='pints'>Pints</option>
              <option value='quarts'>Quarts</option>
            </select>
          </div>
        </div>
        <div className='answer-container'>
          {Units.map((unit, i) => {
          return (
            <div className='answer' key={i}>
              <div className='card-block'>
                <div>{unit.label}</div>
                <div>{this.RoundToHundredths(unit.value)}</div>
              </div>
            </div>
          )
        })}
        </div>
      </div>
      </React.Fragment>
    );
  }

}

export default LiquidConverter;