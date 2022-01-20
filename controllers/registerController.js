import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import conn from "../db-connection.js";


// Our register logic starts here
const register = async (req, res) => {
    // Get user input
    const { name, email, phone_number, password } = req.body;

    // Validate user input
    if (!(email && password && name && phone_number)) {
        res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    var emailCheck = "SELECT * from register WHERE email=$1";
    conn.pool.query(emailCheck, [req.body.email], async function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send();
        }
        if (result.rowCount > 0) {
            let user = result.rows[0]
            return res.status(400).json({
                message: "User Already Exist. Please Login",
                user_info: user
            });
        } else {
            const hashPass = await bcrypt.hash(req.body.password, 12);
            const created_on = new Date();

            conn.pool.query('INSERT INTO register (name, email,phone_number,password,created_at) VALUES ($1, $2, $3, $4,$5) RETURNING *', [req.body.name,
            req.body.email,
            req.body.phone_number, hashPass,
                created_on,], async (error, results) => {
                    if (error) {
                        throw error
                    }
                    else {
                        var email = results.rows[0].email;
                        var id = results.rows[0].id;
                        // Create token
                        const token = jwt.sign(
                            { user_id: id, email },
                            'the-super-strong-secrect'
                        );
                        // save user token
                        conn.pool.query(
                            'UPDATE register SET token = $1 WHERE id = $2',
                            [token, id],
                            async(error) => {
                                if (error) {
                                    throw error
                                }
                            }
                        )
                    }
                    return res.status(200).json({
                        message: "User has been Added Successfully....",
                        data:results.rows[0]
                    });

                })

        }
    })

}
export default register;

