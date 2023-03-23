// class
class Car {
    // constructor
    constructor(brand, color, maxSpeed) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        // set random number of chassis number
        this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
    }

    // method
    drive() {
        console.log(`${this.brand} ${this.color} is driving`);
    }
    reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
    }
    turn() {
    console.log(`${this.brand} ${this.color} is turning`);
    }
}

const car1 = new Car("Toyota", "Silver", 200);
const car2 = new Car("Honda", "Red", 100);
const car3 = new Car("Suzuki", "Blue", 300);

console.log(car1);
console.log(car2);
console.log(car3);

car1.drive();
car2.drive();
car3.drive();
console.log(typeof Car);