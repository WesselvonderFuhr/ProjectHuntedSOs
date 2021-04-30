const Result = require("../Helper/Result");

exports.Administrator = async (user) => {
    // Authorized if Administrator
    if (user.role === "Administrator") {
        return null;
    }
    return new Result(403, "You need to be Administrator to do this.");
}

exports.Player = async (user) => {
    // Authorized if Player
    if (user.role === "Player") {
        return null;
    }
    return new Result(403, "You need to be Player to do this.");
}
