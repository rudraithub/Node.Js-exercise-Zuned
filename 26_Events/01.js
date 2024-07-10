const EventEmitter = require('events');

// Create an EventEmitter instance
const eventEmitter = new EventEmitter();

// Define the event name
const eventName = 'customEvent';

// Listener function for the custom event
const eventListener = () => {
  console.log('Custom event occurred!');
};

// Register the event listener
eventEmitter.on(eventName, eventListener);

// Simulate triggering the custom event
setTimeout(() => {
  eventEmitter.emit(eventName);
}, 1000); // Emit the event after 1 second
