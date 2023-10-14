export default function definePayment(numCard) {
  const firstelement = numCard.split('')[0];
  let result;
  switch (Number(firstelement)) {
    case 2: {
      result = 'mir';
      break;
    }
    case 3: {
      result = 'american__express';
      break;
    }
    case 4: {
      result = 'visa';
      break;
    }
    case 5: {
      result = 'mastercard';
      break;
    }
    default: {
      result = null;
      break;
    }
  }
  return result;
}
