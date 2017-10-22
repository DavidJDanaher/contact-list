export default function() {
    return {
        restrict: 'E',
        template: require('./contact-list-element.html'),
        controller: 'ContactListElementController',
        controllerAs: 'elementVm',
        scope: {},
        bindToController: {
            name: '@',
            company: '@',
            image: '@',
            favorite: '='
        }
    }
}
