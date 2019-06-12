const toPints = (conversionType, numberOfUnits) => {
  let value;
  switch (conversionType) {
    case 'tea-spoons':
      value = numberOfUnits / 96;
      break;

    case 'table-spoons':
      value = numberOfUnits / 32;
      break;

    case 'ounces':
      value = numberOfUnits / 16;
      break;

    case 'pints':
      value = numberOfUnits * 1;
      break;

    case 'quarts':
      value = numberOfUnits * 2;
      break;

    default:
      return 'NaN';
  }
  return value;
}

export default toPints;