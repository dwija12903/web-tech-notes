const EventEmitter = require('events');
const myEmitter = new EventEmitter();
const myListener = () => {
  console.log('Event occurred!');
};

// Attach the listener to the event
myEmitter.on('eventName', myListener);

// Emit the event
myEmitter.emit('eventName'); // Output: Event occurred!

// Remove the listener for the event
myEmitter.removeListener('eventName', myListener);

// Emit the event again
myEmitter.emit('eventName'); // No output
