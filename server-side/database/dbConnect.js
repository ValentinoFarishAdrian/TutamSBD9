const { Pool } = require('pg');
require('dotenv').config();


const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: true
});

pool.connect().then(() => {
    console.log("Connected to the database");
}).catch((err) => {
    console.log("Error connecting to database", err);
});

module.exports = { pool };