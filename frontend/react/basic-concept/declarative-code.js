const names = ['Alice', 'Emily', 'Kate'];
const uppercaseNames = names.map((name) => name.toUpperCase());

console.log(uppercaseNames); // ['ALICE', 'EMILY', 'KATE']

function Contacts() {
    const names = ['Alice', 'Emily', 'Kate'];

    return (
        <ol className='contacts'>
            {names.map((name) => <li>{name}</li>)}
        </ol>
    );
}

export default Contacts;