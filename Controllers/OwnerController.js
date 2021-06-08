const Result = require("../Helper/Result");
const bcrypt = require('bcrypt');

let Owner = require('../MongoDB/owner');

class OwnerController {
    async changePassword(body, old_password) {
        let owner = await Owner.findOne();

        if(body.new_password == null || body.verify_new_password == null){
            return new Result(400, "Must present new_password and verify_new_password.");
        }

        if(body.new_password !== body.verify_new_password){
            return new Result(400, "New passwords are not equal");
        }

        if(bcrypt.compareSync(old_password, owner.password)) {
            let hash = bcrypt.hashSync(body.new_password, 8);
            let update_body = { password: hash};
            await Owner.updateOne({_id: owner._id}, update_body);

            return new Result(200, "Password has been updated.");
        } else {
            return new Result(403, "Forbidden, failed to authenticate");
        }
    }
}

module.exports = new OwnerController();
