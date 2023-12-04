const {constants} = require("../constant")

const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "validation Failed",
                messange: error.message,
                stackTrace: error.stack
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "not Found",
                messange: error.message,
                stackTrace: error.stack
            });
            break;
            case constants.FORBIDDEN:
            res.json({
                title: "FORBIDDEN",
                messange: error.message,
                stackTrace: error.stack
            });
            break;
            case constants.SERVER_ERROR:
            res.json({
                title: "SERVER_ERROR",
                messange: error.message,
                stackTrace: error.stack
            });
            break;
            case constants.UNAUTHORIZED:
                res.json({
                    title: "UNAUTHORIZED",
                    messange: error.message,
                    stackTrace: error.stack
                });
                break;
        default:
            console.log("No, error, All good")
            break;
    }

};

module.exports = errorHandler;