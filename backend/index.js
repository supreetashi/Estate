const express = require('express');
const propertyRoutes = require('./routes/propertyRoutes'); // Import routes

const app = express();
const DEFAULT_PORT = 3000;

// Middleware for parsing JSON
app.use(express.json());

// Use the routes under the `/api` prefix
app.use('/api', propertyRoutes);

// Start the server on a dynamic port
app.listen(process.env.PORT || DEFAULT_PORT, () => {
    const port = process.env.PORT || DEFAULT_PORT;
    console.log(`Server running on http://localhost:${port}`);
});
