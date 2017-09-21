import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import myComponent from './components/my-component/my-component.module.js'
import myCtrl from './features/home.controller.js';

export default angular.module('myAppName', [uiRouter, 'myComponent'])
    .config(confgure)
    .controller('myCtrl', myCtrl);

function confgure($stateProvider) {
    $stateProvider.state('test',{
        url: '',
        template: require('./features/home.html'),
        controller: 'myCtrl',
        controllerAs: 'homeVm'
    })
}
