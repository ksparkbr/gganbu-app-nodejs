//.. runSQL.js
const mysql = require('mysql');
const config = require('../config/global-config');

var dbpool = mysql.createPool(config.mysql);

module.exports = (query, param, callback) => {
    dbpool.getConnection((err, conn) => {
        if (!err) {
            conn.query(query, param, (err, res) => {
                if (!err) {
                    conn.release();
                    callback(res);
                }
                else{
                    console.log(err);
                    callback(res);
                }
            })
        }
        console.log(err);
    })
}
