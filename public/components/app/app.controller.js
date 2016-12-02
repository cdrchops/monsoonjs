appCtrl.$inject = ['$interval', '$timeout'];
export default function appCtrl($interval, $timeout) {
    console.log('appCtrl');
    let vm = this;
    vm.bgImg = 'img/bg1.jpg';

    function changeBackground() {
        console.log('changing image');
        vm.imgLoaded = false;
        let imageNum = Math.floor(Math.random() * 6) + 1;
        vm.bgImg = 'img/bg' + imageNum + '.jpg'; 
        $timeout(()=>{
            vm.imgLoaded = true;
        }, 50)

    }
    changeBackground();
    $interval(()=>{
        changeBackground()
    }, 10000);

}