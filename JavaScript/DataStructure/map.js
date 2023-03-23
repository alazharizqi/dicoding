const myMap = new Map([
    ['1', 'a string key'],
    [1, 'a number key'],
    [true, false]
]);
console.log(myMap);

const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);
console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);

const wrongMap = new Map();
wrongMap ["My key"] = "My value";
console.log(wrongMap);
console.log(wrongMap.has("My key"));
console.log(wrongMap.delete("My key"));

// map only can use .set() and .get() not .has() and delete.