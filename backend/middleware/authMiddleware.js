const jwt = require("jsonwebtoken")

const JWTSECRET = "1234abcd"

function authMiddleware (req,res,next){
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({});
    }
    const token = authHeader.split(' ')[1];
    try {
       
        const decoded = jwt.verify(token, JWTSECRET); 
        req.userId = decoded.UserId; 
       
       
        next(); 
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    next()
}

module.exports = authMiddleware