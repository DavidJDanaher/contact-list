export default function ContactsCtrl(contactService) {
    var vm = this;
    vm.contacts;
    vm.selectedContact;

    contactService.getContacts()
        .then(function(response) {
            vm.contacts = response;
            vm.selectedContact = response[0];
            console.log(vm.selectedContact);
    });
}
