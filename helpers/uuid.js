const { v4: uuidv4 } = require('uuid'); // Import the uuid module

const generateUUID = () => { // Generate a UUID
    return uuidv4(); // Return the UUID
};

module.exports = generateUUID;
