const {pool} = require ('../database/dbConnect');

const createNotes = async (req, res) => {
    const { user_id, title, content } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO notes (user_id, title, content) VALUES ($1, $2, $3) RETURNING *' ,
            [user_id, title, content]
        );
        const newNotes = result.rows[0];
        res.status(201).json(newNotes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Cant' Create Note, Server Error" });
    }
};

const getAllNotes = async (req, res) => {
    try{
        const result = await pool.query(
            // 'SELECT * FROM notes'
            `SELECT notes.*, users.username, users.email
            FROM notes
            INNER JOIN users ON notes.user_id = users.id`,
        );
        const newNotes = result.rows;
        res.status(200).json(newNotes);
    } catch(error){
        console.error(error);
        res.status(500).json({ message: "Can't Get Notes, Server Error" });
    }
};

async function updateNotes(req, res){
    const { id} = req.params;
    const { title, content } = req.body;
    try{
        const result = await pool.query(
            'UPDATE notes SET title = $1, content = $2 WHERE id = $3 RETURNING *',
            [title, content, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Note not found" });
        }
        const newNotes = result.rows[0];
        res.status(200).json(newNotes);
    } catch {
        console.error(error);
        res.status(500).json({ message: "Can't Update Note, Internal Server Error" });
    }
};

async function deleteNotes(req, res) {
    const { id } = req.params;
    try {
        const result = await pool.query(`DELETE FROM notes WHERE id = $1 RETURNING *`, [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Note not found" });
        }
        const newNotes = result.rows[0];
        res.status(201).json(newNotes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Can't Delete Note, Internal Server Error" });
    }
};

async function detailNotes(req, res) {
    const { id } = req.params;
    try {
        const result = await pool.query(
            'SELECT * FROM notes WHERE id = $1', [id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Note not found" });
        }
        const newNotes = result.rows[0];
        res.status(200).json(newNotes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Can't Get Note's Details, Internal Server Error" });
    }
};

module.exports = {
    getAllNotes,
    createNotes, 
    updateNotes, 
    deleteNotes,
    detailNotes
};