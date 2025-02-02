const express = require('express');
const propertyController = require('../controller/propertyController');
const router = express.Router();

// POST API to add a property
router.post('/add-property', propertyController.addProperty);

// GET API to fetch all properties
router.get('/properties', propertyController.getAllProperties);

// GET API to fetch a property by ID
router.get('/property/:id', propertyController.getPropertyById);

module.exports = router;
