const express = require('express');
const pool = require('./config/db');

const app = express();
const PORT = 3000;

// Middleware for parsing JSON
app.use(express.json());

// Test database connection
app.get('/test-db', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS result');
    res.json({ message: 'Database connected successfully!', result: rows[0].result });
  } catch (error) {
    res.status(500).json({ message: 'Database connection failed!', error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
