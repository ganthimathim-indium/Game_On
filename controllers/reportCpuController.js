import conn from "../db-connection.js";

// Our report logic starts here
const cpuReport = async (req, res) => {
    // Get user input
    const { device_id, user_id, cpu_app_usage,avg_memory_usage,avg_power_usage, avg_gpu_usage } = req.body;

    // Validate user input
    if (!(device_id && user_id)) {
        res.status(400).send("DeviceId and UserId is required");
    }
    var userCheck = "SELECT * from report_basicinfo WHERE device_id=$1";
    conn.pool.query(userCheck, [device_id], async function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send();
        }

        if (result.rowCount === 0) {
            return res.status(400).json({
                message: "User Not Exist. Please Login"
            });
        } else {
            if(req.session.device_id != undefined){
            const created_on = new Date();
              const cpuQuery = 'INSERT INTO cpu_report(device_id,user_id,session_id, cpu_app_usage, created_at) VALUES ($1,$2,$3,$4,$5)';
              const memoryUsageQuery = 'INSERT INTO memory_report(device_id,user_id,session_id,avg_memory_usage,created_at) VALUES ($1,$2,$3,$4,$5)';
              const powerUsageQuery = 'INSERT INTO power_usage_report(device_id,user_id,session_id,avg_power_usage,created_at) VALUES ($1,$2,$3,$4,$5)';
              const gpuUsageQuery = 'INSERT INTO gpu_usage_report(device_id,user_id,session_id,avg_gpu_usage,created_at) VALUES ($1,$2,$3,$4,$5)';
              conn.pool.query(cpuQuery, [req.session.device_id,user_id,req.session.sessionID, cpu_app_usage, created_on]);
              conn.pool.query(memoryUsageQuery, [req.session.device_id,user_id,req.session.sessionID, avg_memory_usage,created_on]);
              conn.pool.query(powerUsageQuery, [req.session.device_id,user_id,req.session.sessionID, avg_power_usage,created_on]);
              conn.pool.query(gpuUsageQuery, [req.session.device_id,user_id,req.session.sessionID, avg_gpu_usage, created_on]);
              return res.status(200).json({
                message: 'Device info added',
              });
            }else{
                return res.status(400).json({
                    message: "Session Expired"
                }); 
            }
        }

    })

}
export default cpuReport;

