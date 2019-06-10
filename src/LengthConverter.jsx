import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toInch, toFoot, toYard, toCentimeter, toKilometer, toMeter } from './utils/index';


class LengthConverter extends Component {
  constructor() {
    super();
    this.state = {
      conversionType: 'inch',
      foot: 0,
      yard: 0,
      centimeter: 0,
      kilometer: 0,
      meter: 0,
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
      {label: 'Inch', value: toInch(this.state.conversionType, this.state.numberOfUnits)},
      {label: 'Foot', value: toFoot(this.state.conversionType, this.state.numberOfUnits)},
      {label: 'Yard', value: toYard(this.state.conversionType, this.state.numberOfUnits)},
      {label: 'Centimeter', value: toCentimeter(this.state.conversionType, this.state.numberOfUnits)},
      {label: 'Kilometer', value: toKilometer(this.state.conversionType, this.state.numberOfUnits)},
      {label: 'Meter', value: toMeter(this.state.conversionType, this.state.numberOfUnits)},
    ];
    return (
      <React.Fragment>
        <div className='input-group'>
          <input onChange={this.convertUnits} id='name' type='number' className='input-form' />
            <select onChange={this.setConversionType} className='drop-down' id='type'>
              <option defaultValue value='inch'>Inch</option>
              <option value='foot'>Foot</option>
              <option value='yard'>Yard</option>
              <option value='centimeter'>Centimeter</option>
              <option value='kilometer'>Kilometer</option>
              <option value='meter'>Meter</option>
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

export default LengthConverter;
