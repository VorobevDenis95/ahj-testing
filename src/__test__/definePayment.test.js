import definePayment from '../js/definePayment';

test('test american__express', () => {
  const cardNumber = '371449635398431';
  const result = definePayment(cardNumber);
  expect(result).toBe('american__express');
});

test('test mir', () => {
  const cardNumber = '271449635398431';
  const result = definePayment(cardNumber);
  expect(result).toBe('mir');
});

test('test mastercard', () => {
  const cardNumber = '5555555555554444';
  const result = definePayment(cardNumber);
  expect(result).toBe('mastercard');
});

test('test visa ', () => {
  const cardNumber = '4111111111111111';
  const result = definePayment(cardNumber);
  expect(result).toBe('visa');
});
