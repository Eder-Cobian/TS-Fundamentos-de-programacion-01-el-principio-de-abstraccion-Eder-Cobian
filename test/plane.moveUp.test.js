import Plane from '../src/plane';

test('Mueve el avión hacia arriba', () => {
  let obj = new Plane(10, 20);

  expect(obj.moveUp(3)).toBe(23);
  expect(obj.moveUp(10)).toBe(24);
});
