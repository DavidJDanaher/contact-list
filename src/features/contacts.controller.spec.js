import ctrl from './contacts.controller.js';
import { expect } from 'chai';
import  sinon from 'sinon';

describe('Contact List Controller', function() {
    var myCtrl;
    var contactServiceMock;

    beforeEach(function() {
        contactServiceMock = {
            getContacts: sinon.spy()
        }

        myCtrl = new ctrl(contactServiceMock);
    });

    it('should call the contact service for the list', function() {
        expect(contactServiceMock).to.have.been.called;
    })
});
