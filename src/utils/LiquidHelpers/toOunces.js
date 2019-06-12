
const toOunces = (conversionType, numberOfUnits) => {
  let value;
  switch (conversionType) {
    case 'tea-spoons':
      value = numberOfUnits / 6;
      break;

    case 'table-spoons':
      value = numberOfUnits / 2;
      break;

    case 'ounces':
      value = numberOfUnits * 1;
      break;

    case 'pints':
      value = numberOfUnits * 16;
      
      break;

    case 'quarts':
      value = numberOfUnits * 32;
      break;

    default:
      value = 'NaN';
  }
  return value;
}

export default toOunces;