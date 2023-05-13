// const server = new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'azhar.com',
// });

const cpu = process.memoryUsage();
console.log(cpu);

const first = process.argv[0];
const seccond = process.argv[1];
const third = process.argv[2];
const fourth = process.argv[3];

console.log(first);
console.log(seccond);
console.log(third);
console.log(fourth);