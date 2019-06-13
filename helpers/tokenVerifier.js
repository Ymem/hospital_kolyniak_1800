const jwt = require('jsonwebtoken');
const {secret} = require('../constants/secret');

module.exports = token => {

    let user = null;

    jwt.verify(token, secret, (err, decode) => {
        if (err) throw new Error('Not valid token!');
        user = decode;
    });

    return user;
};
