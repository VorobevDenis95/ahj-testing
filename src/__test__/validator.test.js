import validator from '../js/validator';

test('validator test', () => {
  const result = validator('371449635398431');
  expect(result).toBe(true);
});
test('validator test2', () => {
  const result = validator('371449635398430');
  expect(result).toBe(false);
});
