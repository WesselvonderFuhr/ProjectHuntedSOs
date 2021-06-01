require('../test/testSetup');
var expect = require('chai').expect;
const OwnerController = require('../Controllers/OwnerController');
let Owner = require('../MongoDB/owner');

//changePassword
describe('owner put new password', async function(){
    it('put password 200', async ()  => {
        let password = "Ridderbier"
        let body = { new_password: "Groenteboer", verify_new_password: "Groenteboer"};
        let result = await OwnerController.changePassword(body, password)
        expect(result.responseCode).to.equal(200);
    });
});
