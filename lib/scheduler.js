'use strict';
const thing = {
    this: 'thing'
};
const running = true;
const models = require('../models');

module.exports = Scheduler;



function getSchedules() {
    //console.log(models);
    models.Schedule.findAll({
        include: [{
            model: models.SchedulePin
        }],
        where: {
            Complete: false,
            Suspended: false
        }
    }).then((schedules) => {
        schedules.map((s)=>{
            //work this nested loop
            s.SchedulePins.map((p)=>{
                models.Pin.findById(p.Pin).then( (pin) => {
                    if(!pin.PinActive){
                       console.log('pin ' + pin.id + ' is not active... activating pin');
                       s.update({Running: true});
                      pin.update({PinActive: true});
                    }
                    console.error('pin ' + pin.id + ' is active cannot activate pin!')
                    if(s.Duration <= 0){
                        pin.update({PinActive: false});
                        s.update({Running: false}).then((u)=>{
                            u.update({Complete: true});
                        })
                    }
                });
            })
            if(s.Duration > 0){
                s.update({Duration: s.Duration - 5})
            }
            if(s.Duration <= 0){
                s.update
                const sPin = s.SchedulePins[0];
                const kPin = Models.Pin.findById(sPin.Pin).then();
            }
           
            
        })
    }).catch((err) => {
        //console.log(err);
    })
}




function Scheduler() {
    const timer = setInterval(function () {
        getSchedules();
    }, 5000)
    return {
        cancel: () => {
            clearInterval(timer);
        }
    }
}