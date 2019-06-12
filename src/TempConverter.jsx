import React, { Component } from 'react';
import PropTypes from 'prop-types';
import{ toCelsius, toFahrenheit, toKelvin } from './utils/index'

class TempConverter extends Component {
  constructor() {
    super();
    this.state = {
      conversionType: 'Fahrenheit',
    };
  }
  
  RoundToHundredths = (val) => {
    return (Math.round(val * 100) / 100);
  };


  render() {
    let Units = [
      {label: 'Celsius', value: toCelsius(this.state.conversionType, this.state.numberOfUnits)},
      {label: 'Fahrenheit', value: toFahrenheit(this.state.conversionType, this.state.numberOfUnits)},
      {label: 'Kelvin', value: toKelvin(this.state.conversionType, this.state.numberOfUnits)},
    ];

    return (
      <React.Fragment>
        <div className='converter-container'>
        <div className='input-group'>
          <input onChange={this.props.convertUnits.bind(this)} id='name' type='number' className='input-form' />
          <div className='drop-down'>
            <select onChange={this.props.setConversionType.bind(this)} id='type'>
              <option defaultValue value='Fahrenheit'>Fahrenheit</option>
              <option value='Celsius'>Celsius</option>
              <option value='Kelvin'>Kelvin</option>
            </select>
          </div>
        </div>
        <div className='answer-container'>
          {Units.map((unit, i) => {
          return (
            <div className='answer' key={i}>
              <div className='card-block'>
                <div>{unit.label}</div>
                <div>{this.RoundToHundredths(unit.value) || 0}</div>
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

export default TempConverter;
