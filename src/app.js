import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import otherView from './features/another-view/another-view.module.js';
import myComponent from './components/my-component/my-component.module.js';
import myCtrl from './features/home.controller.js';
require('./resources/styles/app.style.scss');

export default angular.module('myAppName', [uiRouter, 'myComponent', 'AnotherViewModule'])
    .config(confgure)
    .controller('myCtrl', myCtrl);

function confgure($stateProvider) {
    $stateProvider.state('Home', {
        url: '',
        template: require('./features/home.html'),
        controller: 'myCtrl',
        controllerAs: 'homeVm'
    }).state('Feature', {
        url: '/otherFeature',
        template: require('./features/another-view/another-view.html'),
        controller: 'AnotherViewCtrl',
        controllerAs: 'anotherVm'
    });
}
