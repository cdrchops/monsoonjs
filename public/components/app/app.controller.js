appCtrl.$inject = ['$interval'];
export default function appCtrl($interval) {
    console.log('appCtrl');
    let vm = this;
    vm.appBg = {
        "background-image": ""
    };

    function changeBackground() {
        console.log('changing image');
        let imageNum = Math.floor(Math.random() * 6) + 1;
        vm.appBg['background-image'] = 'url("img/bg' + imageNum + '.jpg")'; 
    }
    changeBackground();
    $interval(()=>{
        changeBackground()
    }, 15000);

}