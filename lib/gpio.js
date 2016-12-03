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
            type: "NC"
        });
        let r2 = new five.Relay({
            pin: "P1-11",
            type: "NC"
        });
        let r3 = new five.Relay({
            pin: "P1-12",
            type: "NC"
        });
        let r4 = new five.Relay({
            pin: "P1-13",
            type: "NC"
        });
        let r5 = new five.Relay({
            pin: "P1-15",
            type: "NC"
        });
        let r6 = new five.Relay({
            pin: "P1-16",
            type: "NC"
        });
        let r7 = new five.Relay({
            pin: "P1-18",
            type: "NC"
        });
        let r8 = new five.Relay({
            pin: "P1-22",
            type: "NC"
        });

        let zones = new five.Relays([r1,r2,r3,r4,r5,r6,r7,r8]);

        //zones.close();


    })
}