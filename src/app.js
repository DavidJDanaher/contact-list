import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import uiKit from 'uikit';
import kitIcons from 'uikit/dist/js/uikit-icons';

import otherView from './features/detail-view/detail-view.module.js';
import contactDetails from './components/contact-details/contact-details.module.js';
import contactListElement from './components/contact-list-element/contact-list-element.module.js';
import contactService from './services/contact.service.js';
import ContactListCtrl from './features/contacts.controller.js';

require('./resources/styles/app.style.scss');
uiKit.use(kitIcons);

export default angular.module('myAppName', [
    uiRouter,
    'AnotherViewModule',
    'contactDetails',
    'contactListElement'])
    .config(confgure)
    .controller('ContactListCtrl', ContactListCtrl)
    .service('contactService', contactService);

function confgure($stateProvider) {
    $stateProvider.state('Home', {
        url: '',
        template: require('./features/contacts-list-view.html'),
        controller: 'ContactListCtrl',
        controllerAs: 'listVm'
    }).state('Feature', {
        url: '/otherFeature',
        template: require('./features/detail-view/detail-view.html'),
        controller: 'AnotherViewCtrl',
        controllerAs: 'anotherVm'
    });
}
