// immutability berarti sebuah objek tidak boleh diubah setelah objek tersebut dibuat

const user = {
    firstName : "Al",
    lastName : "Azhar"
}

const renameLastNameUser = (newLastName, user) => {
    user.lastName = newLastName;
}

renameLastNameUser("Zharsuke", user);

console.log(user);

const user1 = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const createUserWithNewLastName = (newLastName, user) => {
    return { ...user, lastName: newLastName }
}

const newUser = createUserWithNewLastName('Potter', user);

console.log(newUser);