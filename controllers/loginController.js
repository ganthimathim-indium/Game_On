import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import conn from "../db-connection.js";

const login = async (req, res, next) => {
    var emailCheck = "SELECT * from register WHERE email=$1";
    conn.pool.query(emailCheck, [req.body.email], async function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send();
        }
        if (result.rowCount === 0) {
            return res.status(400).json({
                message: "Invalid email address",
            });
        }
        const passMatch = await bcrypt.compare(req.body.password, result.rows[0].password);

        if (!passMatch) {
            return res.status(400).json({
                message: "Incorrect password",
            });
        }
        const theToken = jwt.sign({ id: result.rows[0].id }, 'the-super-strong-secrect', { expiresIn: '1h' });

        return res.json({
            token: theToken
        });
    })



}

export default login;