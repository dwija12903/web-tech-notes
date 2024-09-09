var events = require('events');

//create a new event
//way 1
const myEmitter = new events.EventEmitter();

//listen 
myEmitter.on('event',function(){
    console.log('Event Fired');
})

//emit event 
myEmitter.emit('event');

//way2 
class Emitter extends events{}
const myEmitter2 = new Emitter();
myEmitter2.on('event1',()=>{
    console.log('Event1 Fired');
})
myEmitter2.emit('event1');


//way3
const myemitter3 = new events.EventEmitter();
function mylistner(name,id){
    console.log(`${name} your event with if ${id} has started`);
};
myemitter3.on('start',mylistner);
myemitter3.emit('start','Dwija','12AbC3');

//remove listener
myemitter3.removeListener('start',mylistner);
myemitter3.emit('start','Dwija','12AbC3');

//remove all listeners
myemitter3.removeAllListeners(['start','event1']);
myemitter3.emit('start','Dwija','12AbC3');
myEmitter2.emit('event1');


