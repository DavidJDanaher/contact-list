import angular from 'angular';
import MyComponentController from './my-component.controller';
import myComponentDirective from './my-component.directive';

export default angular.module('myComponent', [])
    .controller('MyComponentController', MyComponentController)
    .directive('myComponentDirective', myComponentDirective);
