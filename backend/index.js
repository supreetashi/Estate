const express = require('express');
const cors = require('cors');
const propertyRoutes = require('./routes/propertyRoutes'); // Import routes

const app = express();
const DEFAULT_PORT = 3000;

// ✅ Enable CORS for frontend requests
app.use(cors({
    origin: "http://localhost:3001", // Allow requests from frontend
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
}));

// Middleware for parsing JSON
app.use(express.json());

// Use the routes under the `/api` prefix
app.use('/api', propertyRoutes);

// Start the server
app.listen(process.env.PORT || DEFAULT_PORT, () => {
    const port = process.env.PORT || DEFAULT_PORT;
    console.log(`🚀 Server running on http://localhost:${port}`);
});