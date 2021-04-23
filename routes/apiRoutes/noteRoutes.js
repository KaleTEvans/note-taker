const router = require('express').Router();

const { notes } = require('../../db/notes');

router.get('/notes', (req, res) => {
    res.json(notes);
});

module.exports = router;