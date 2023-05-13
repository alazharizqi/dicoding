const {EventEmitter} = require('events');

const birthdayEventListener = (name) => {
    console.log(`Happy Birthday ${name}!`);
}

const myEventEmitter = new EventEmitter();

const onBirthdayListener = ({name}) => {
    birthdayEventListener(name);
}

myEventEmitter.on('birthday', onBirthdayListener);

myEventEmitter.emit('birthday', {name: 'azhar'});