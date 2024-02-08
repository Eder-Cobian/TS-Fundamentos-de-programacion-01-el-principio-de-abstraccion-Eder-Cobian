import Property from './property.js';
import Plane from './plane.js';
import Number from './number.js';

class Test {
  plane() {
    const planeA = new Plane(10, 20);
    const planeB = new Plane(5, 10);

    console.log(planeA.positionX, planeA.positionY);
    console.log(planeB);
    console.log(planeA.fire('bullet'));
    console.log(planeB.fire('laser'));

    console.log(planeA.moveUp(3));
    console.log(planeA.moveDown(10));
    console.log(planeB.moveLeft(10));
    console.log(planeB.moveRight(3));
  }
  property() {
    const propertyA = new Property(10, 25, 3500, 'Av.Universidad #333');

    console.log(propertyA.getArea());
    console.log(propertyA.getPerimeter());
    console.log(propertyA.getPrice());
  }
  number() {
    const numberA = new Number(3);

    console.log(numberA.isEven());
    console.log(numberA.isPrime());
    console.log(numberA.isPositive());
  }
}
const test = new Test();
test.property();
test.plane();
test.number();