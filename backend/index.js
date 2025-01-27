const express = require('express');
const pool = require('./config/db');

const app = express();
const DEFAULT_PORT = 3000;

// Middleware for parsing JSON
app.use(express.json());

// Test database connection
app.get('/test-db', async(req, res) => {
    try {
        const [rows] = await pool.query('SELECT 1 + 1 AS result');
        res.json({ message: 'Database connected successfully!', result: rows[0].result });
    } catch (error) {
        res.status(500).json({ message: 'Database connection failed!', error: error.message });
    }
});

// POST API to add a new property
app.post('/properties', async(req, res) => {
    const {
        title,
        description,
        price,
        location,
        category,
        owner_name,
        owner_contact,
        images,
    } = req.body;

    try {
        const [result] = await pool.query(
            'INSERT INTO properties (title, description, price, location, category, owner_name, owner_contact, images) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [title, description, price, location, category, owner_name, owner_contact, JSON.stringify(images)]
        );
        res.status(201).json({ message: 'Property added successfully!', propertyId: result.insertId });
    } catch (error) {
        res.status(500).json({ message: 'Error adding property', error: error.message });
    }
});

// GET API to get all properties
app.get('/properties', async(req, res) => {
    try {
        const [properties] = await pool.query('SELECT * FROM properties');
        res.json({ message: 'Properties retrieved successfully!', properties });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving properties', error: error.message });
    }
});

// SEARCH API for searching properties
app.get('/properties/search', async(req, res) => {
    const { query } = req.query;

    try {
        const [results] = await pool.query(
            'SELECT * FROM properties WHERE title LIKE ? OR location LIKE ?', [`%${query}%`, `%${query}%`]
        );
        res.json({ message: 'Search results retrieved successfully!', results });
    } catch (error) {
        res.status(500).json({ message: 'Error searching properties', error: error.message });
    }
});

// GET API to retrieve a specific property by ID
app.get('/properties/:id', async(req, res) => {
    const { id } = req.params;

    try {
        const [properties] = await pool.query('SELECT * FROM properties WHERE id = ?', [id]);
        if (properties.length > 0) {
            res.json({ message: 'Property retrieved successfully!', property: properties[0] });
        } else {
            res.status(404).json({ message: 'Property not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving property', error: error.message });
    }
});

// Start the server on a dynamic port
app.listen(process.env.PORT || DEFAULT_PORT, () => {
    const port = process.env.PORT || DEFAULT_PORT;
    console.log(`Server running on http://localhost:${port}`);
});