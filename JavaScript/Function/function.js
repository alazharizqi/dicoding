function kont(a, b) {
    return a * b;
}

console.log(kont(5,7));

const user = {
    id : 01,
    username : "zharsuke"
}

function introduce({id, username}) {
    console.log(`${id} ${username}`);
}

introduce(user);

function exponentFormula(baseNumber, exponent = 2) {
    const result = baseNumber ** exponent;
    console.log(`${baseNumber} ^ ${exponent} = ${result}`);
}

exponentFormula(2);

function sum(...numbers) {
    let result = 0;
    for(let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(1,2,3,4,5));