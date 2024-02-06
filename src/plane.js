export default class Plane {
  constructor(posX, posY) {
    this.positionX = posX;
    this.positionY = posY;
  }

  fire(type) {
    return `fire ${type}!`;
  }

  moveUp(value) {
    if (this.positionY + value > 24) {
      this.positionY = 24;
    } else {
      this.positionY += value;
    }
    return this.positionY;
  }

  moveDown(value) {
    if (this.positionY - value < 0) {
      this.positionY = 0;
    } else {
      this.positionY -= value;
    }
    return this.positionY;
  }

  moveLeft(value) {
    if (this.positionX - value < 0) {
      this.positionX = 0;
    } else {
      this.positionX -= value;
    }
    return this.positionX;
  }

  moveRight(value) {
    if (this.positionX + value > 80) {
      this.positionX = 80;
    } else {
      this.positionX += value;
    }
    return this.positionX;
  }
}