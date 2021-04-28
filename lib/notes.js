const fs = require('fs');
const path = require('path');

// function to create a new note
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
};

// validation for notes 
function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
};

// find a note by it's id
function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
};

// delete a note
function deleteNote(result, notesArray) {
    const deleteNote = result;
    // get new array without the item selected for deletion
    const newNotes = notesArray.filter(item => item.id !== result.id);
    console.log(newNotes);
    fs.writeFileSync(
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify({ notes: newNotes }, null, 2)
    );
    return deleteNote.id;
}

module.exports = { createNewNote, validateNote, findById, deleteNote };