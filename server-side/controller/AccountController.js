const { pool } = require('../database/dbConnect');

async function signup(req, res){
    const { username, email, password} = req.body;
    try {
        const result = await pool.query(
            `INSERT INTO users (username, email, password) 
            VALUES ($1, $2, $3) RETURNING *`,
            [username, email, password]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Can't Signup, Server Error!"});
    }
};

async function login(req,res){
    const {username, password} = req.body;
    try {
        const result = await pool.query(
            'SELECT * FROM users WHERE username = $1 AND password = $2', 
            [username, password]);
        if (result.length === 0) {
            return res.status(200).send('username or password is incorrect');
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Can't Login, Server Error!"});
    }
};

module.exports = {
    signup,
    login
}