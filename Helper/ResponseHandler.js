exports.ResponseHandler = (result, req, res) => {
    let responseCode = 500;
    let message = { message: "Something went wrong" }
    if(result != null){
        responseCode = result.responseCode;
        if(result.responseCode === 200){
            message = result.message;
        } else {
            message.message = result.message;
        }
    }

    return res.status(responseCode).json(message);
}
