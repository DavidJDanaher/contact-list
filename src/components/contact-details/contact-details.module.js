import angular from 'angular';
import ContactDetailsController from './contact-details.controller';
import contactDetailsDirective from './contact-details.directive';

export default angular.module('contactDetails', [])
    .controller('ContactDetailsController', ContactDetailsController)
    .directive('contactDetails', contactDetailsDirective);
