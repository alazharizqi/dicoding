const myllist = ["al", "azhar"];
const user = ["zharsuke", "zharmaru"];
const allList = [myllist, user];
const spreadAllList = [...myllist, ...user];
console.log(myllist);
console.log(...myllist);
console.log(allList);
console.log(spreadAllList);

const admin = {firstName : "admin", test : "apaya"};
const cashier = {lastName : "cashier", test1 : "this cashier"};
const allRole = {admin, cashier};
console.log(allRole);
const spreadAllRole = {...admin, ...cashier};
console.log(spreadAllRole);

// console.log(admin);

// const obj1 = { firstName: 'Obi-Wan', age: 30 };
// const obj2 = { lastName: 'Kenobi', gender: 'M' };

// const newObj = { ...obj1, ...obj2 };

// console.log(newObj);