const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Salt&Burn67',
    database: 'employees'

});

module.exports = db;