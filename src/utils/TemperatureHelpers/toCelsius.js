const toCelsius = (conversionType, numOfUnits) => {
  let value;
  switch(conversionType){
    case 'Fahrenheit':
      value = (numOfUnits - 32) * (5/9)
      break;
    case 'Celsius':
      value = numOfUnits;
      break;
    case 'Kelvin':
      value = numOfUnits - 273.15;
  }
  return value;
}

export default toCelsius