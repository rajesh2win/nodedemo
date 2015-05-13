//import events module
var events = require('events');
//create an eventEmitter object
var eventEmitter = new events.EventEmitter();

//create a function connected which is to be executed 
//when 'connection' event occurs
var connected = function connected() {
    console.log('connection succesful.');

    // fire the data_received event
    eventEmitter.emit('data_received');
}

// bind the connection event with the connected function
eventEmitter.on('connection', connected);

// bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
    console.log('data received succesfully.');
});

// fire the connection event 
eventEmitter.emit('connection');

console.log("Program Ended.");