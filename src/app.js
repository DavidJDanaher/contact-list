import angular from 'angular';
// import uiRouter from 'angular-ui-router';

angular.module('myAppName', [
    // 'uiRoutfer'
])
    .controller('myCtrl', myCtrl);

function mainView() {
    var element = document.createElement('main');
    element.setAttribute("ng-app", "myAppName");
    element.innerHTML = "<ng-view>Main</ng-view>";

    return element;
}

document.body.appendChild(mainView());
