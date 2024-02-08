export default class Number {
  constructor(value) {
    this.value = value;
  }

  isEven() {
    if (this.value % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  isPrime() {
    if (this.value <= 1) {
      return false;
    }
    if (this.value <= 3) {
      return true;
    }
    if (this.value%2 === 0 || this.value%3 === 0 || this.value%5 === 0 || this.value%7 === 0) {
      return false;
    } else {
      return true;
    }
  }

  isPositive() {
    if (this.value >= 0) {
      return true;
    } else {
      return false;
    }
  }
}