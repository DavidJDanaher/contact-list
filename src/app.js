import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import uiKit from 'uikit';
import kitIcons from 'uikit/dist/js/uikit-icons';

import contactService from './services/contact.service.js';
import detailView from './features/detail-view/detail-view.module.js';
import contactDetails from './components/contact-details/contact-details.module.js';
import contactListElement from './components/contact-list-element/contact-list-element.module.js';
import ContactListCtrl from './features/contacts.controller.js';

require('./resources/styles/app.style.scss');
uiKit.use(kitIcons);

export default angular.module('ContactList', [
    uiRouter,
    'detailViewModule',
    'contactDetails',
    'contactListElement'])
    .config(confgure)
    .controller('ContactListCtrl', ContactListCtrl)
    .service('contactService', contactService);

function confgure($stateProvider) {
    $stateProvider.state({
        name: 'contacts',
        url: '/',
        template: require('./features/contacts-list-view.html'),
        controller: 'ContactListCtrl',
        controllerAs: 'listVm'
    }).state({
        name: 'details',
        url: '/details/{id}',
        template: require('./features/detail-view/detail-view.html'),
        resolve: {
            details: function (contactService, $transition$) {
                return contactService.getContactDetails($transition$.params().id);
            }
        },
        controller: 'DetailViewCtrl',
        controllerAs: 'detailVm'
    });
}
