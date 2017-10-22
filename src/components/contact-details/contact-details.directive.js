export default function() {
    return {
        restrict: 'E',
        template: require('./contact-details.html'),
        controller: 'ContactDetailsController',
        controllerAs: 'detailsVm',
        scope: {},
        bindToController: {
            contact: '='
        }
    }
}
