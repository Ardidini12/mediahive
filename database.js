import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

//here we will create a table for the users and later we will export the commands to app.js

//test connection
console.log('Starting database connection test...');
(async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Connected to the database');

        connection.release();
    } catch (err) {
        console.error('Error:', err);
    }
})();
