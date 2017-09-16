import angular from 'angular';
import myCtrl from './app.controller.js';

const myMod = angular.module('myAppName', [])
    .controller('myCtrl', myCtrl);


console.log(myMod)
