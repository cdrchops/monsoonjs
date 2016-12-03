'use strict';
const five = require('johnny-five');
const Raspi = require('raspi-io');

const board = new five.Board({
    io: new Raspi()
});


module.exports = Gpio

function Gpio() {
    return board.on("ready", () => {
        let r1 = new five.Relay({
            pin: "P1-7",
            type: "NO"
        });
        let r2 = new five.Relay({
            pin: "P1-11",
            type: "NO"
        });
        let r3 = new five.Relay({
            pin: "P1-12",
            type: "NO"
        });
        let r4 = new five.Relay({
            pin: "P1-13",
            type: "NO"
        });
        let r5 = new five.Relay({
            pin: "P1-15",
            type: "NO"
        });
        let r6 = new five.Relay({
            pin: "P1-16",
            type: "NO"
        });
        let r7 = new five.Relay({
            pin: "P1-18",
            type: "NO"
        });
        let r8 = new five.Relay({
            pin: "P1-22",
            type: "NO"
        });

        let zones = new five.Relays([r1,r2,r3,r4,r5,r6,r7,r8]);

        relays.close();
    })
}