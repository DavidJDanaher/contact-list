import { expect } from 'chai';
import sinon from 'sinon';
import ctrl from './detail-view.controller.js';

describe('Details Controller', function() {
    describe('toggleFavorite', function() {
        var contactObj = {
            name: 'Dave',
            isFavorite: false
        };
        var testCtrl = new ctrl(contactObj);

        it('toggles the value of \"isFavorite\" on the contact object', function() {
            ctrl.toggleFavorite();

            expect(ctrl.contact.isFavorite).to.be.true;
        });
    });
});
