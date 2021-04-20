const Result = require("../Helper/Result");

exports.Admin = async (user) => {
    // Authorized if admin
    if (user.role === "Admin") {
        return null;
    }
    return new Result(403, "You need to be admin to do this.");
}
