const router = require('express').Router();
const uniqid = require('uniqid');

const { createNewNote, validateNote, findById, deleteNote } = require('../../lib/notes');
const { notes } = require('../../db/notes');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

// find note by id when clicked on 
router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

// delete selected note
router.delete('/notes/:id', (req, res) => {
    // find notes id when clicked on 
    const result = findById(req.params.id, notes)
    if (result) {
        const newNotes = deleteNote(result, notes);
        res.json(newNotes);
    }
});

// post a new note
router.post('/notes', (req, res) => {
    // give note a new id
    req.body.id = uniqid();

    if (!validateNote(req.body)) {
        req.statusCode(400).send('This note is not properly formatted');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

module.exports = router;