'use strict';
const five = require('johnny-five');
const Raspi = require('raspi-io');

const board = new five.Board({
    io: new Raspi()
});


module.exports = Gpio

function Gpio() {
    return new Promise((resolve, reject) => {
        board.on("ready", () => {
            let r1 = new five.Relay({
                pin: "P1-7"
            });
            let r2 = new five.Relay({
                pin: "P1-11"
            });
            let r3 = new five.Relay({
                pin: "P1-12"
            });
            let r4 = new five.Relay({
                pin: "P1-13"
            });
            let r5 = new five.Relay({
                pin: "P1-15"
            });
            let r6 = new five.Relay({
                pin: "P1-16"
            });
            let r7 = new five.Relay({
                pin: "P1-18"
            });
            let r8 = new five.Relay({
                pin: "P1-22"
            });

            let zones = new five.Relays([r1, r2, r3, r4, r5, r6, r7, r8]);
            resolve(zones);
        })
    })
}