const toTableSpoon = (conversionType, numberOfUnits) => {
  let value;
  switch (conversionType) {
    case 'tea-spoons':
      value = numberOfUnits / 3;
      break;

    case 'table-spoons':
      value = numberOfUnits * 1;
      break;

    case 'ounces':
      value = numberOfUnits * 2;
      break;

    case 'pints':
      value = numberOfUnits * 32;
      break;

    case 'quarts':
      value = numberOfUnits * 64;
      break;

    default:
      value = 'NaN';
  }
  return value;
}

export default toTableSpoon;