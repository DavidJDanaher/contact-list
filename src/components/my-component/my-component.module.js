import angular from 'angular';
import MyComponentController from './my-component.controller';
import MyComponentDirective from './my-component.directive';

angular.module('myComponent', [])
    .controller('MyComponentController', MyComponentController)
    .directive('MyComponentDirective', MyComponentDirective);
