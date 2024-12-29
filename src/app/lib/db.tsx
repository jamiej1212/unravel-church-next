import mysql from 'mysql2/promise';

const database = mysql.createPool({
    host: process.env.DB_HOST_END_POINT,
    port: 3306,
    user: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

export default database;