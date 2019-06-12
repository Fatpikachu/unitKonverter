const toFahrenheit = (conversionType, numOfUnits) => {
  let value;
  switch(conversionType){
    case 'Fahrenheit':
      value = numOfUnits;
      break;
    case 'Celsius':
      value = numOfUnits * (9/5) + 32;
      break;
    case 'Kelvin':
      value = (numOfUnits - 273.15) * (9/5) + 32
  }
  return value;
}

export default toFahrenheit;