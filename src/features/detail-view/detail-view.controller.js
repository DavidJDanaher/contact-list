export default function DetailViewCtrl(contact) {
    var vm = this;

    this.message = '\"I\'m a controller from a different view!\"';
    vm.contact = contact;

    vm.toggleFavorite = toggleFavorite;

    function toggleFavorite() {
        console.log(vm.contact.isFavorite);
        vm.contact.isFavorite = !vm.contact.isFavorite;
    }
}
