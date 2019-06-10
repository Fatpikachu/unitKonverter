
const toInch = (conversionType, numberOfUnits) => {
  let value;
  switch (conversionType) {
    case 'inch':
      value = numberOfUnits / 12;
      break;

    case 'foot':
      value = numberOfUnits;
      break;

    case 'yard':
      value = numberOfUnits * 3;
      break;

    case 'centimeter':
      value = numberOfUnits / 30.48;
      
      break;

    case 'kilometer':
      value = numberOfUnits * 3280.84;
      break;

    case 'meter':
    value = numberOfUnits * 3.281;
    break;

    default:
      value = 'NaN';
  }
  return value;
}

export default toInch;