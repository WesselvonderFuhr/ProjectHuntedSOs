const Result = require("../Helper/Result");

exports.Administrator = async (user) => {
    // Authorized if Administrator
    if (user.role === "Administrator") {
        return null;
    }
    return new Result(403, "You need to be Administrator to do this.");
}
