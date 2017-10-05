import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import uiKit from 'uikit';
import kitIcons from 'uikit/dist/js/uikit-icons';

import otherView from './features/another-view/another-view.module.js';
import myComponent from './components/my-component/my-component.module.js';
import HomeCtrl from './features/home.controller.js';

require('./resources/styles/app.style.scss');
uiKit.use(kitIcons);

export default angular.module('myAppName', [uiRouter, 'myComponent', 'AnotherViewModule'])
    .config(confgure)
    .controller('HomeCtrl', HomeCtrl);

function confgure($stateProvider) {
    $stateProvider.state('Home', {
        url: '',
        template: require('./features/home.html'),
        controller: 'HomeCtrl',
        controllerAs: 'homeVm'
    }).state('Feature', {
        url: '/otherFeature',
        template: require('./features/another-view/another-view.html'),
        controller: 'AnotherViewCtrl',
        controllerAs: 'anotherVm'
    });
}
