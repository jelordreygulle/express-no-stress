'use strict';

exports.validateCountries = function (req, res, next) {
    console.log('validating.. ');
    req.checkBody('sortname', 'Please provide sort Name').notEmpty();
    req.checkBody('name', 'Please provide Name').notEmpty();
    var errors = req.validationErrors();

    if (errors) {
        console.log('validation error');
        res.status(400).send({
            response: {
                result: errors,
                msg: '',
                success: false
            },
            statusCode: 400
        });
    } else {
        console.log('validation success');
        next();
    }
};

exports.isLogin = function (req, res, next) {
    console.log('validating headers ');
    console.log('request token : \n', req.headers.token);
    if (req.headers.token) {
        next();
    } else {
        console.log('token not found');
        res.status(400).json({
            response: {
                result: 'token not found',
                msg: 'token not found',
                success: false
            },
            statusCode: 400
        })
    }

};