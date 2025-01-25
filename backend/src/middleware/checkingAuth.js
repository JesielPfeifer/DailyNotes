const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ msg: 'Usuário não autenticado' });
        }
        const secret = process.env.SECRET;
        const decoded = jwt.verify(token, secret);
        req.id = decoded.id;
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Internal Server Error' });
    }
};

module.exports = verifyToken;
