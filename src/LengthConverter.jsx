import React, { Component } from 'react';
import PropTypes from 'prop-types';
// var algebra = require('algebra.js');

class LengthConverter extends Component {
  constructor() {
    super();
    this.state = {
      conversionType: 'Inch',
      numberOfUnits: 0,
      selected: false,
    };
    this.conversion = {
      Inch: 1/12,
      Foot: 1,
      Yard: 3,
      Centimeter: 1/30.48,
      Kilometer: 3280.84,
      Meter: 3.28084
    }
  }

  RoundToHundredths = (val) => {
    return (Math.round(val * 100) / 100);
  };

  componentDidMount(){
    this.setState({selected: true});
  }

  render() {
    let Units = [];
    for(let units in this.conversion){
      Units.push({label: units, value: this.props.convert.call(this, this.state.conversionType, units, this.conversion, this.state.numberOfUnits)})
    }

    return (
      <React.Fragment>
        <div className='converter-container'>
        <div className='input-group'>
          <input onChange={this.props.convertUnits.bind(this)} id='name' type='number' className='input-form' />
          <div className='drop-down'>
            <select onChange={this.props.setConversionType.bind(this)} id='type'>
              <option defaultValue value='Inch'>Inch</option>
              <option value='Foot'>Foot</option>
              <option value='Yard'>Yard</option>
              <option value='Centimeter'>Centimeter</option>
              <option value='Kilometer'>Kilometer</option>
              <option value='Meter'>Meter</option>
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

export default LengthConverter;
