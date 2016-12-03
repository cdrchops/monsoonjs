'use strict';

adminCtrl.$inject = ['gpioSvc'];

function adminCtrl (gpioSvc) {
    var vm = this;
    vm.pinActions = pinActions;
    vm.zones = [{
        id: 1,
        name:'Zone 1',
        description:'a Zone',
        active: false
    },
    {
        id: 2,
        name:'Zone 2',
        description:'a Zone',
        active: false
    },
    {
        id: 3,
        name:'Zone 3',
        description:'a Zone',
        active: false
    },
    {
        id: 4,
        name:'Zone 4',
        description:'a Zone',
        active: false
    },
    {
        id: 5,
        name:'Zone 5',
        description:'a Zone',
        active: false
    },
    {
        id: 6,
        name:'Zone 6',
        description:'a Zone',
        active: false
    },
    {
        id: 7,
        name:'Zone 7',
        description:'a Zone',
        active: false
    },
    {
        id: 8,
        name:'Zone 8',
        description:'a Zone',
        active: false
    }
    ];
    function pinActions(index, pin, action){
        return gpioSvc.set({pin:pin, action:action}).$promise.then((res)=>{
            console.log(res);
            let actionResult = true;
            if(action.toLowerCase() === 'off'){
                actionResult = false;
            }
            vm.zones[index].active = actionResult;
        })
    }
    console.log(vm.zones);

}

export default adminCtrl