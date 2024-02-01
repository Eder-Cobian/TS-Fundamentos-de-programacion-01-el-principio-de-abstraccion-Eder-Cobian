import Property from '../src/property';

test('Calcula el perímetro de una propiedad', () => {
  let obj = new Property(10, 20, 3200, 'Av. Universidad 333');

  expect(obj.getPerimeter()).toBe(2 * 10 + 2 * 20);
});
