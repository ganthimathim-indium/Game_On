import jwt from "jsonwebtoken";
import conn from '../db-connection.js';


const verifyToken = (req, res, next) => {
    const token =
        req.body.token || req.query.token || req.headers["token"];
    console.log(token, "hhhh")

    if (!token) {
        res.status(403).json({message: "A token is required for authentication"});
    }
    const tokenCheck = 'SELECT * from register WHERE token=$1';
    conn.pool.query(tokenCheck, [token], async (err, result) => {
        if (err) {
            console.error(err);
            res.status(404).send();
        }
        console.log(result.rows[0])
        if(result.rows[0] != undefined){
            // const decoded = jwt.verify(token, "the-super-strong-secrect");
            next();

        } else {
            res.status(401).json({message: "Invalid Token"});
            return 0;
        }
        return 0;

    })

};

export default verifyToken;