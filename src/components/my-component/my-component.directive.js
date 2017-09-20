export default function() {
    return {
        restrict: 'E',
        templateUrl: 'components/my-component/my-component.html',
        controller: 'MyComponentController',
        controllerAs: 'componentVm',
        scope: {}
    }
}
