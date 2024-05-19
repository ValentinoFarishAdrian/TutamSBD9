const express = require('express');
const router = express.Router();
const noteContr = require('../controller/NoteController');
const accountContr = require('../controller/AccountController');

router.post('/login', accountContr.login);
router.post('/signup', accountContr.signup);
router.post('/createNote', noteContr.createNotes);
router.get('/getAllNotes', noteContr.getAllNotes);
router.put('/updateNote/:id', noteContr.updateNotes);
router.delete('/deleteNote/:id', noteContr.deleteNotes);
router.get('/noteDetails/:id', noteContr.detailNotes);

module.exports = router;