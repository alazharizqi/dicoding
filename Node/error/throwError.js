const json = '{"name" : "zharsuke", "age" : 19}';
// const json = '{"age" : 19}';
// const json = '{ bad json }';

try {
    const user = JSON.parse(json);

    if (!user.name) {
        throw new SyntaxError("'name' is required!");
    }

    errorCode;

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    // console.log(error.name);
    // console.log(error.message);
    console.log(`JSON Error : ${error.message}`);
}