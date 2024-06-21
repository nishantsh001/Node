const EventEmitter = require('events');
//class MyEmitter extends EventEmitter{}

const myEmitter = new EventEmitter();

myEmitter.on('WaterFull', ()=>{
  console.log('Turn off the motor');
  setTimeout(()=>{
    console.log('please turn off')
  },3000)
})

myEmitter.emit('WaterFull')