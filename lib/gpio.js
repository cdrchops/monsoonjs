'use strict';
const five = require('johnny-five');
const Raspi = require('raspi-io');

const board = new five.Board({
    io: new Raspi()
});


module.exports = Gpio

function Gpio () {
    return board.on("ready", () =>{
        const pins = new five.Relays([
            {
                pin: "P1-7",
                type:"NO"
            },
            {
                pin: "P1-11",
                type:"NO"
            },
            {
                pin: "P1-12",
                type:"NO"
            },
            {
                pin: "P1-13",
                type:"NO"
            },
            {
                pin: "P1-15",
                type:"NO"
            },
            {
                pin: "P1-16",
                type:"NO"
            },
            {
                pin: "P1-18",
                type:"NO"
            },
            {
                pin: "P1-22",
                type:"NO"
            }
            
        ]);
        function toggle(pin){
           pins[pin].toggle();
           return {
               message: 'pin #' + pin + ' toggled' 
           }
        }
        return toggle;
    })
}