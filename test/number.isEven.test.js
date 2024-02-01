import Number from '../src/number';

test('Determina si un número es par', () => {
  let obj = new Number(150);
  expect(obj.isEven()).toBe(true);

  obj = new Number(151);
  expect(obj.isEven()).toBe(false);
});
