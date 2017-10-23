export default function DetailViewCtrl(details) {
    var vm = this;

    vm.contact = details;
    vm.toggleFavorite = toggleFavorite;

    function toggleFavorite() {
        vm.contact.isFavorite = !vm.contact.isFavorite;
    }
}
