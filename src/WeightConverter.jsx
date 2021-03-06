import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WeightConverter extends Component {
  constructor() {
    super();
    this.state = {
      conversionType: 'Pound',
    };
    this.conversion = {
      Pound: 1,
      Kilogram: 2.205,
      Gram: 1/453.592,
      Milligram: 1/453592,
      Ounce: 1/16,
    }
  }
  
  RoundToHundredths = (val) => {
    return (Math.round(val * 100) / 100);
  };

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
              <option defaultValue value='Pound'>Pound</option>
              <option value='Kilogram'>Kilogram</option>
              <option value='Gram'>Gram</option>
              <option value='Milligram'>Milligram</option>
              <option value='Ounce'>Ounce</option>
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

export default WeightConverter;
