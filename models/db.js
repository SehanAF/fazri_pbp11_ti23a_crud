const mysql = require('mysql');

const db = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: '',
 database: 'db_fazri_ti23a'
}); 

db.connect((err) => {
    if (err) {
        console.error('Kesalahan saat menyambung ke database:', err);
    } else {
        console.log('Terhubung ke database');
    }
});

module.exports = db;