// Challenge "Event Maestro: Handle it all"

//! Objective

// Create a programm using Node.js EventEmitter that: 

//? Listens for multiple types of events (eg.., login, logout, purchase, and profile update).
//? Tracks how many types each event is emitted.
//? logs a summary of all  event occurances when a special summary is triggered.


//! Requirements

//? Create at least fout custom events (eg.., user-login, user-logout, user-purchase, profile-update).
//? Emit these events multiple times with different arguements (eg.., username, item purchased).
//? Track and store the count of each event type.
//? Define a summary event that logs a detailed report of how many times each event has triggered.



const EventEmitter = require('events');
const emitter = new EventEmitter();


const eventCounts = {
    'user-login': 0,
    'user-purchase': 0,
    'user-update': 0,
    'user-logout': 0,
};


emitter.on('user-login', (username) => {
    eventCounts['user-login'] += 1;
    console.log(`${username} Logined`)
})

emitter.on('user-purchase', (username, product) => {
    eventCounts['user-purchase'] += 1;
    console.log(`${username} Purchased ${product}`);
    
})

emitter.on('user-update', (username, updated) => {
    eventCounts['user-update'] += 1;
    console.log(`${username} Updated ${updated}`);
    
})

emitter.on('user-logout', (username) => {
    eventCounts['user-logout'] += 1;
    console.log(`${username} LogedOut`);
    
})

emitter.on('summary', () => {
    console.log(eventCounts)
    
})

emitter.emit('user-login', 'Sejawal');
emitter.emit('user-purchase', 'Sejawal', 'Tablet');
emitter.emit('user-update', 'Sejawal', 'Password');
emitter.emit('user-logout', 'Sejawal');


// Summary event
console.log('first summary')
emitter.emit('summary');


