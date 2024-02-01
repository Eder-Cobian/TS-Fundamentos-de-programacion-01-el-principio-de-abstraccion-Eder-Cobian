import Property from '../src/property';

test('Calcula el precio de una propiedad', () => {
  let obj = new Property(10, 20, 3200, 'Av. Universidad 333');

  expect(obj.getPrice()).toBe(10 * 20 * 3200);
});
