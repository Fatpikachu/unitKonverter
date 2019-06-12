const toQuarts = (conversionType, numberOfUnits) => {
  let value;
  switch (conversionType) {
    case 'tea-spoons':
    value = numberOfUnits / 192;
      break;

    case 'table-spoons':
    value = numberOfUnits / 64;
      break;

    case 'ounces':
    value = numberOfUnits / 32;
      break;

    case 'pints':
    value = numberOfUnits / 2;
      break;

    case 'quarts':
    value = numberOfUnits * 1;
      break;

    default:
      value = 'NaN';
  }
  return value;
}

export default toQuarts;