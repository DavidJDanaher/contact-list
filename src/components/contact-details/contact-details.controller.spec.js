import ComponentController from './my-component.controller.js';
import { expect } from 'chai';

describe('MyComponentController', function() {
    var ctrl;

    beforeEach(function() {
        ctrl = new ComponentController();
    });

    describe('updateMessage', function() {
        it('updates vm.message', function() {
            expect(ctrl.message).to.equal('\"Hello from a controller!\"');

            ctrl.newMessage = 'This is a test';
            ctrl.updateMessage();
            expect(ctrl.message).to.equal('This is a test');
        });
    });
});
