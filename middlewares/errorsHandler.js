function errorsHandler(err, req, res, next) {
    res.status(500)
    res.json({
        error: err.message,
        message: "Error status 500"
    });
   };
   
   module.exports = errorsHandler;