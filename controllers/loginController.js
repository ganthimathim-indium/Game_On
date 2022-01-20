import bcrypt from 'bcryptjs';
import conn from "../db-connection.js";

const login = async (req, res) => {
    var emailCheck = "SELECT * from register WHERE email=$1";
    conn.pool.query(emailCheck, [req.body.email], async function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send();
        }

        // Validate user email
        if (result.rowCount === 0) {
            return res.status(400).json({
                message: "Invalid email address",
            });
        }
        const passMatch = await bcrypt.compare(req.body.password, result.rows[0].password);
        // Validate user password  
        if (!passMatch) {
            return res.status(400).json({
                message: "Incorrect password",
            });
        }
        return res.json(result.rows[0]);
    })



}

export default login;