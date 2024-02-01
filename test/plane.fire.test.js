import Plane from '../src/plane';

test('Realiza un disparo', () => {
  let obj = new Plane(10, 20);

  expect(obj.fire('laser').toLowerCase()).toBe('fire laser!');
});
