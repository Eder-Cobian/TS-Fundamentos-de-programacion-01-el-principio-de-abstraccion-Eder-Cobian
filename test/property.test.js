import Property from '../src/property';

test('Evalúa el método constructor de Property', () => {
  let obj = new Property(10, 20, 3200, 'Av. Universidad 333');

  expect(obj.width).toBe(10);
  expect(obj.height).toBe(20);
  expect(obj.priceM2).toBe(3200);
  expect(obj.address).toBe('Av. Universidad 333');
});
