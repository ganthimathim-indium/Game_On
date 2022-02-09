import bcrypt from 'bcryptjs';
import conn from "../db-connection.js";

// Our login logic starts here
const login = async (req, res) => {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
        res.status(400).send("All input is required");
    }
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
        // single files can be set
        res.setHeader("token", result.rows[0].token);
        console.log("res", res)
        return res.json(result.rows[0]);
    })



}

export default login;