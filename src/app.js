import angular from 'angular';
import myCtrl from './app.controller.js';

angular.module('myAppName', [])
    .controller('myCtrl', myCtrl);

function mainView() {
    var element = document.createElement('main');
    element.setAttribute("ng-app", "myAppName");
    element.innerHTML = "{{ 2 + 5 }}";

    return element;
}

document.body.appendChild(mainView());
