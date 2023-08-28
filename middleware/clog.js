const clog = (req, res, next) => {
  const date = new Date();

  // Set colors for different HTTP methods
  const methodColors = {
      GET: '\x1b[32m', // Green for GET
      POST: '\x1b[34m', // Blue for POST
      DELETE: '\x1b[31m', // Red for DELETE
  };

  let successMessage = '';

  switch (req.method) {
      case 'POST':
          successMessage = 'POST request successful';
          break;
      case 'DELETE':
          successMessage = 'DELETE request successful';
          break;
      default:
          break;
  }

  const methodColor = methodColors[req.method] || '\x1b[37m'; // Default to white if color is not defined

  // Log the request details with colored method, URL, and optional success message
  console.log(
      `[${date.toLocaleString()}] ${methodColor}${req.method}\x1b[0m ${req.url} ${successMessage}`
  );

  next(); // Continue processing the request
};

module.exports = clog; // Export the middleware function
