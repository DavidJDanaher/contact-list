export default function() {
    return {
        restrict: 'E',
        template: require('./my-component.html'),
        controller: 'MyComponentController',
        controllerAs: 'componentVm',
        scope: {}
    }
}
