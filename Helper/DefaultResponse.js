exports.DefaultResponse = (result, req, res) => {
    let responseCode = 500;
    let message = { message: "Something went wrong" }
    if(result != null){
        responseCode = result.responseCode;
        message.message = result.message;
    }

    return res.status(responseCode).json(message);
}
