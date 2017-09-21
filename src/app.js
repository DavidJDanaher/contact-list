import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import myCtrl from './features/home.controller.js';

console.log(require('./features/home.html'));

export default angular.module('myAppName', [uiRouter])
    .config(confgure)
    .controller('myCtrl', myCtrl);

function confgure($stateProvider) {
    $stateProvider.state('test',{
        url: '',
        template: require('./features/home.html'),
        controller: myCtrl,
        controllerAs: 'homeVm'
    })
}
