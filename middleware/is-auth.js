const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        req.isAuth = false;
        console.log("called 1");
        next();
    } else {
        const token = authHeader.split(' ')[1];
        if (!token || token === "") {
            req.isAuth = false;
            console.log("called 2");
            next();
        }
        let decodedToken
        try {
            decodedToken = jwt.verify(token, 'somesupersecretkey');
        } catch {
            req.isAuth = false;
            console.log("called 3");
            next();
        }
        if (!decodedToken) {
            req.isAuth = false;
            console.log("called 4");
            next();
        }
        req.isAuth = true;
        req.userId = decodedToken.userId;
        console.log("Authorization successful");
        next();
    }
}