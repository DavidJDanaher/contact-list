export default function contactService($http, $q) {
    var service = this;
    // This is to avoid CORS problems running locally
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    var contactsUrl = 'https://s3.amazonaws.com/technical-challenge/v3/contacts.json';
    var contacts = [];

    service.getContacts = getContacts;
    service.getContactDetails = getContactDetails;

    function getContacts() {
        var deferred = $q.defer();

        if (contacts.length === 0) {
            $http.get(proxyUrl + contactsUrl)
                .then(function(res) {
                     contacts = angular.fromJson(res.data);
                     deferred.resolve(contacts);
                })
                .catch(function() {
                    window.alert('Unable to load contacts');
                });
        } else {
            deferred.resolve(contacts);
        }

        return deferred.promise;
    }

    function getContactDetails(id) {
        var deferred = $q.defer();
        var contact;

        getContacts()
            .then(function(res) {
                contact = res.filter(function(contact) {
                    return contact.id === id;
                }).pop();

                deferred.resolve(contact);
            });

        return deferred.promise;
    }
}
