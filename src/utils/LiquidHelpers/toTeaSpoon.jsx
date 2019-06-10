const toTeaSpoon = (conversionType, numberOfUnits) => {
  let value;
  switch (conversionType) {
    case 'tea-spoons':
      value = numberOfUnits * 1;
      break;

    case 'table-spoons':
      value = numberOfUnits * 3;
      break;

    case 'ounces':
      value = numberOfUnits * 6;
      break;

    case 'pints':
      value = numberOfUnits * 96;
      break;

    case 'quarts':
      value = numberOfUnits * 192;
      break;

    default:
      value = 'NaN';
  }
  return value;
}

export default toTeaSpoon;