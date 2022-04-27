/* eslint-disable import/extensions */
import XLSX from 'xlsx';
import conn from '../db-connection.js';

const getReport = async (req, res) => {
  const {
    sessionID,
  } = req.query;
  const sql = 'SELECT * FROM reports WHERE user_id = $1';
  const userId = res.apiuser.user_id;
  conn.pool.query(sql, [Number(userId)], (error, results) => {
    if (error) {
      return res.json({
        message: error,
        status: 'false',
      });
    }
    const reportData = Object.entries((results.rows[0].json_report_data));
    console.log(typeof (reportData));
    reportData.forEach((element) => {
      console.log(typeof (element));
    });

    // reportData.forEach((element) => {
    //   if (element.session_id === sessionID) {
    //     const newWorkSheet = XLSX.utils.json_to_sheet(JSON.stringify(element));
    //     const newWorkBook = XLSX.utils.book_new();

    //     XLSX.utils.book_append_sheet(newWorkBook, newWorkSheet, 'Report');
    //     // Generate buffer
    //     XLSX.write(newWorkBook, { bookType: 'xlsx', type: 'buffer' });

    //     // Binary string
    //     XLSX.write(newWorkBook, { bookType: 'xlsx', type: 'binary' });

    //     XLSX.writeFile(newWorkBook, `TestRepot(${sessionID}).xlsx`);
    //   }
    // });
  });
};

// ***************************************************************

export default getReport;
