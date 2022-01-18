import bcrypt from 'bcryptjs';
import conn from "../db-connection.js";

const register = async (req, res, next) => {
    var emailCheck = "SELECT * from register WHERE email=$1";
    conn.pool.query(emailCheck, [req.body.email],async function(err, result) {
        if (err) {
            console.error(err);
            res.status(500).send();
        }
        if (result.rowCount > 0) {
            let user = result.rows[0]
            return res.status(200).json({
                message: "Email id already used....",
                result: user
            });
        } else {
            const hashPass = await bcrypt.hash(req.body.password, 12);
            const created_on = new Date();

            conn.pool.query('INSERT INTO register (name, email,phone_number,password,created_at) VALUES ($1, $2, $3, $4,$5)', [req.body.name,
            req.body.email,
            req.body.phone_number, hashPass,
                created_on,], (error, results) => {
                    console.log(error)
                    if (error) {
                        throw error
                    }
                    return res.status(200).json({
                        message: "User has been Added Successfully...."                    });
                })
        }
    })

}
export default register;

