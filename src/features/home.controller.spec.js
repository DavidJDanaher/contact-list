import ctrl from './home.controller.js';
import { expect } from 'chai';


describe('First test', function() {
    var myCtrl;

    beforeEach(function() {
        myCtrl = new ctrl();
    });


    it('should do something', function() {
        expect(myCtrl.test).to.equal('Hello from home controller');
    })
});
