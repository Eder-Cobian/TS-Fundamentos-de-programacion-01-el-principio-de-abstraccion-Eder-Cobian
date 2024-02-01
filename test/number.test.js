import Number from '../src/number';

test('Evalua el método constructor de Number()', () => {
  let obj = new Number(150);

  expect(obj.value).toBe(150);
});
