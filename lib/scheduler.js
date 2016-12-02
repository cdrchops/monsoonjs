'use strict';
const thing = {
    this: 'thing'
};
const running = true;
const models = require('../models');

module.exports = Scheduler;



function getSchedules() {
    //find all that have not yet completed, are Suspended, or are running
    models.Schedule.findAll({
            include: [{
                model: models.SchedulePin
            }],
            where: {
                Complete: false,
                Suspended: false,
                Running: false
            }
        }).then((schedules) => {
            schedules.map((s) => {
                //activate schedule
                s.SchedulePins.map((p) => {
                    models.Pin.findById(p.Pin).then((pin) => {
                        if (!pin.PinActive) {
                            console.log('pin ' + pin.id + ' is not active... activating pin');
                            s.update({
                                Running: true
                            });
                            pin.update({
                                PinActive: true
                            });
                        } else {
                            console.error('pin ' + pin.id + ' is active cannot activate pin!')
                        }

                    });
                })
            })
        }).catch((err) => {
            //console.log(err);
        });
        //find all that are running
        models.Schedule.findAll({
            include: [{
                model:models.SchedulePin
            }],
            where: {
                Complete: false,
                Suspended: false,
                Running: true
            }
        }).then((schedules)=>{
            schedules.map((s)=>{
                if(s.Duration > 0){
                    console.log('duration', s.Duration);
                    //decrease duration by 5 seconds;
                    let newDuration = s.Duration - 5;
                    console.log('new duration', newDuration);
                    s.update({Duration: newDuration});
                    if(newDuration <= 0){
                        s.SchedulePins.map((p)=>{
                            models.Pin.findById(p.Pin).then((pin) => {
                                pin.update({PinActive: false});
                            })
                        })
                        console.log('schedule completed');
                        s.update({Running: false, Complete: true});
                    }
                    
                    
                }
               
            })
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