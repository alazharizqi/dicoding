class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const user = new User("Al", "Azhar");
console.log(user);
console.log(user.fullName);

user.fullName = "Zharsuke Uciha";
console.log(user);
console.log(user.fullName);

class Car {
    // constructor
    constructor(brand, color, maxSpeed) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        // set random number of chassis number
        this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
    }

    get chassisNumber() {
        return this._chassisNumber;
    }
    set chassisNumber(chassisNumber) {
        console.log("You're not allowed to change the chassis number!!!")
    }
}

const car = new Car("BMW", "Red", 200);
console.log(car.chassisNumber);
car.chassisNumber = "BMW-1";
console.log(car.chassisNumber);

// private dikasi dengan #