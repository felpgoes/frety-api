const expressJwt = require('express-jwt'),
    jwt = require('jsonwebtoken'),
    guard = require('express-jwt-permissions');

    exports.generateJwt = (payload = []) => {
        return jwt.sign(payload, 'private-key');
    }

    exports.getMiddleware = () => {
        return expressJwt({secret: 'private-key2'});
    }

    exports.checkRole = (roles) => {
        const xuxa = new guard();
        return xuxa.check(roles)
    }

    exports.hasPermissions = (userPermissions, permission) => {
        return userPermissions.includes(permission)
    }