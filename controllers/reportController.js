import conn from "../db-connection.js";

// Our report logic starts here
const reportInfo = async (req, res) => {

    // Get user input
    const { device_id, user_id, device_name, android_version, start_time, end_time, version_name, app_name, record_duration } = req.body;

    // Validate user input
    if (!(device_id && user_id)) {
        res.status(400).send("DeviceId and UserId is required");
    }

    const created_on = new Date();
    conn.pool.query('INSERT INTO report_basicinfo (device_id, user_id, device_name, android_version, start_time, end_time, version_name, app_name, record_duration,created_at) VALUES ($1, $2, $3, $4,$5,$6, $7, $8, $9,$10) RETURNING *', [device_id, user_id, device_name, android_version, created_on, created_on, version_name, app_name, record_duration, created_on], async (error, results) => {
            if (error) {
                console.log(error)
                return res.status(400).json({
                    message: "Report Not Updated....",
                    status: "false"
                });
            }
            var result = [results.rows[0]];
            req.session.device_id = req.body.device_id;
            req.session.sessionID = Math.random() * 8;
            return res.status(200).json({
                message: "Report has been Added Successfully....",
                status: "true",
                data: result
            });

        })

}
export default reportInfo;

