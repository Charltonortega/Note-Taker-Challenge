const fs = require('fs');
const path = require('path');

const dbFilePath = path.join(__dirname, '..', 'db', 'db.json');

// Read notes from db.json
const readNotes = () => {
    try {
        const data = fs.readFileSync(dbFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading notes:', error);
        return [];
    }
};

// Write notes to db.json
const writeNotes = (notes) => {
    try {
        fs.writeFileSync(dbFilePath, JSON.stringify(notes, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing notes:', error);
    }
};

module.exports = { readNotes, writeNotes };
