export default function contactService($http) {
    var service = this;
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    var contactsUrl = 'https://s3.amazonaws.com/technical-challenge/v3/contacts.json';

    service.getContacts = getContacts;

    function getContacts() {
        return $http.get(proxyUrl + contactsUrl)
            .then(function(res) {
                return angular.fromJson(res.data);
            })
            .catch(function() {
                window.alert('Unable to load contacts');
            });
    }
}
