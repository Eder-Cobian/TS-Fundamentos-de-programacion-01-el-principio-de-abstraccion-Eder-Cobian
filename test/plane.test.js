import Plane from '../src/plane';

test('Evalúa el método constructor de Plane()', () => {
  let obj = new Plane(10, 20);

  expect(obj.positionX).toBe(10);
  expect(obj.positionY).toBe(20);
});
