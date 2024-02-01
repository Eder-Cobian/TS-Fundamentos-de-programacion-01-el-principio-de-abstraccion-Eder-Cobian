import Property from '../src/property';

test('Calcula el área de una propiedad', () => {
  let obj = new Property(10, 20, 3200, 'Av. Universidad 333');

  expect(obj.getArea()).toBe(10 * 20);
});
