const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the root path, serve the main page (projects_tracking.html as default)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'projects_tracking.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
