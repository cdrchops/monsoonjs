'use strict';
const five = require('johnny-five');
const Raspi = require('raspi-io');

const board = new five.Board({
    io: new Raspi()
});


module.exports = Gpio

function Gpio () {
    return board.on("ready", () =>{
        const pins = {
            1: new five.Relay("P1-4")
        }
        function toggle(pin){
           pins[pin].toggle();
           return {
               message: 'pin #' + pin + ' toggled' 
           }
        }
        return toggle;
    })
}