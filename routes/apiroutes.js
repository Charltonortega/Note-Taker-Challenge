const express = require('express');
const router = express.Router();
const fsUtils = require('../helpers/fs-utils'); // Assuming this module handles filesystem operations
const uuid = require('../helpers/uuid'); // Assuming this module generates UUIDs

// GET /api/notes - Read all notes
router.get('/notes', (req, res) => {
    const notes = fsUtils.readNotes(); // Implement this function to read notes from db.json
    res.json(notes);
});

// POST /api/notes - Create a new note
router.post('/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuid(); // Generate a unique ID for the note
    const notes = fsUtils.readNotes(); // Read existing notes
    notes.push(newNote); // Add the new note
    fsUtils.writeNotes(notes); // Implement this function to write notes to db.json
    res.json(newNote);
});

// DELETE /api/notes/:id - Delete a note by ID
router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    const notes = fsUtils.readNotes(); // Read existing notes
    const updatedNotes = notes.filter(note => note.id !== noteId); // Remove the note with the specified ID
    fsUtils.writeNotes(updatedNotes); // Write the updated notes to db.json
    res.json({ message: 'Note deleted' });
});

module.exports = router;
