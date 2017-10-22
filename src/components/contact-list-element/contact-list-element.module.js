import angular from 'angular';
import ContactListElementController from './contact-list-element.controller';
import contactListElementDirective from './contact-list-element.directive';

export default angular.module('contactListElement', [])
    .controller('ContactListElementController', ContactListElementController)
    .directive('contactListElement', contactListElementDirective);
