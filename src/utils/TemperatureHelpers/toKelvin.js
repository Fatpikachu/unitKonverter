const toKelvin = (conversionType, numOfUnits) => {
  let value;
  switch(conversionType){
    case 'Fahrenheit':
      value = (numOfUnits - 32) * (5/9) + 273.15 ;
      break;
    case 'Celsius':
      value = numOfUnits + 273.15;
      break;
    case 'Kelvin':
      value = numOfUnits;
  }
  return value;
}

export default toKelvin;