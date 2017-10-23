export default function ContactsCtrl(contactService) {
    var vm = this;
    vm.contacts;

    init();

    function init() {
        contactService.getContacts()
            .then(function(response) {
                vm.contacts = response;
        });
    }
}
