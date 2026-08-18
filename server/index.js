const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001; // Updated port

// Serve static files from Vite's build output (dist)
app.use(express.static(path.join(__dirname, '..', 'dist')));

// Fallback for SPA routing – always return index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
