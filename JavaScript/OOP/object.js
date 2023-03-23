// object
const Car = {
    // attribute
    brand : "Toyota",
    color : "Red",
    maxSpeed : 200,
    chassisNumber : "f-1",
    
    // method
    drive: () => {
        console.log("driving");
    },
    reverse: () => {
        console.log("reversing");
    },
    turn: () => {
        console.log("turning");
    }

}

console.log(Car.brand);
console.log(Car.color);
console.log(Car.maxSpeed);
console.log(Car.chassisNumber);
Car.drive();
Car.reverse();
Car.turn();