//task 1
const nums = [-1, -2, -3, -4, 1, 2, 3, 4];
const filternum = nums.filter((nums) => nums > 0);
const assNum = filternum.reduce((acc, cur) => {
  return acc + cur;
}, 0);

// task 2

const strings = ["porshe", "bmw", "merseders", "bmw", "merseders"];
const doubleString = strings.reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur]++;
  } else acc[cur] = 1;
  return acc;
}, {});

// task 3

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
    this.motion = "the car is not moving";
  }
  check_motion() {
    if (this.speed > 0) {
      return (this.motion = "is moving");
    } else {
      return (this.motion = "is stopped");
    }
  }
  accelerate(speed) {
    this.speed = this.speed + speed;
    return this.speed;
  }
  brake(speed) {
    this.speed = this.speed - speed;
    return this.speed;
  }
  emergency_brake() {
    return (this.speed = 0);
  }
  status() {
    return `${this.brand} ${this.model} ${myCar.check_motion()} ${this.speed} km/h `;
  }
}
const myCar = new Car("paggani", "zonda");
myCar.speed = 0;
console.log(`"check_motion"`, myCar.check_motion());
console.log(`"brake"`, myCar.brake(10));
console.log(`"accelerate"`, myCar.accelerate(10));
console.log( `"myCar"`, myCar.status());


// task 4

const valueFirst = 100;
const valueSecond = 100;

const addAsync = new Promise((resolve, reject) => {
  if (valueFirst > valueSecond) {
    resolve(valueFirst + " " + valueSecond);
  }
  if (valueFirst < valueSecond) {
    resolve(valueSecond + " " + valueFirst);
  } else {
    reject("error");
  }
})
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));
