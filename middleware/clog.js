const clog = (req, res, next) => {
    const date = new Date();
  
    let methodColor = '\x1b[37m'; // (white)
    let successMessage = '';
  
    switch (req.method) {
      case 'GET':
        methodColor = '\x1b[32m'; // Green
        break;
      case 'POST':
        methodColor = '\x1b[34m'; // Blue
        successMessage = 'POST request successful';
        break;
      default:
        break;
    }
  
    console.log(
      `[${date.toLocaleString()}] ${methodColor}${req.method}\x1b[0m ${req.url} ${successMessage}` // log time, method, url, and success
    );
  
    next();
  };
  
  module.exports = clog;