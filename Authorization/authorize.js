const Result = require("../Helper/Result");

exports.Administrator = async (user) => {
    // Authorized if Administrator
    if (user.role === "Administrator") {
        return null;
    }
    return new Result(403, "You need to be Administrator to do this.");
}

exports.AdministratorOrOwner = async (user, player_id) => {
    // Authorized if Administrator or owner
    if (user.role === "Administrator" || user.player_id === player_id) {
        return null;
    }
    return new Result(403, "You need to be Administrator or the owner to do this.");
}

exports.Boef = async (user) => {
    // Authorized if Player
    if (user.role === "Boef") {
        return null;
    }
    return new Result(403, "You need to be Boef to do this.");
}

exports.Agent = async (user) => {
    // Authorized if Player
    if (user.role === "Agent") {
        return null;
    }
    return new Result(403, "You need to be Agent to do this.");
}
