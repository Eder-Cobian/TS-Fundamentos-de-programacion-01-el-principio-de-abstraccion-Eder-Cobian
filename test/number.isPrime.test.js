import Number from '../src/number';

test('Determina si un número es primo', () => {
  let obj = new Number(29);
  expect(obj.isPrime()).toBe(true);

  obj = new Number(28);
  expect(obj.isPrime()).toBe(false);
});
