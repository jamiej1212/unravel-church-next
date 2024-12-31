import mysql from 'mysql2/promise';

const database = mysql.createPool({
    host: process.env.NEXT_PUBLIC_DB_HOST_END_POINT,
    port: 3306,
    user: process.env.NEXT_PUBLIC_DB_USER_NAME,
    password: process.env.NEXT_PUBLIC_DB_PASSWORD,
    database: process.env.NEXT_PUBLIC_DB_NAME
});

export default database;