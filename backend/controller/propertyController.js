const express = require("express");
const formidable = require("formidable");
const supabase = require("../config/supabaseClient");
const pool = require("../config/db");

const router = express.Router();

// POST API to add property
router.post("/add-property", (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res
        .status(400)
        .json({ message: "Error parsing the form", error: err });
    }

    try {
      // Ensure the image is present in the files object
      if (!files.image || files.image.length === 0) {
        return res.status(400).json({ message: "No image file provided." });
      }

      const file = files.image[0]; // Assuming the image field is 'image'
      const filePath = `property_images/${file.originalFilename}`;

      // Log the file details for debugging
      console.log("File details:", file);
      console.log("File path:", file.filepath);

      // Upload image to Supabase bucket
      const { data, error: uploadError } = await supabase.storage
        .from("Images") // Supabase bucket name
        .upload(filePath, file.filepath, {
          contentType: file.mimetype,
        });

      if (uploadError) {
        return res
          .status(500)
          .json({ message: "Error uploading image", error: uploadError });
      }

      // URL-encode the file path to ensure proper URL formatting
      const encodedFilePath = encodeURIComponent(filePath);

      // Manually construct the image URL with the encoded file path
      const imageUrl = `https://wgulsalguiyuyajkgide.supabase.co/storage/v1/object/public/Images/${encodedFilePath}`;

      // Log the image URL for debugging
      console.log("Uploaded image URL:", imageUrl);

      // Ensure the fields are valid strings
      const title = String(fields.title).trim();
      const description = String(fields.description).trim();
      const price = String(fields.price).trim();
      const location = String(fields.location).trim();
      const category = String(fields.category).trim();
      const owner_name = String(fields.owner_name).trim();
      const owner_contact = String(fields.owner_contact).trim();

      // Check if any required fields are missing
      if (
        !title ||
        !description ||
        !price ||
        !location ||
        !category ||
        !owner_name ||
        !owner_contact
      ) {
        return res
          .status(400)
          .json({ message: "Missing required property details." });
      }

      // Insert into the database
      const query = `
        INSERT INTO properties (title, description, price, location, category, owner_name, owner_contact, image)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      `;
      const values = [
        title,
        description,
        price,
        location,
        category,
        owner_name,
        owner_contact,
        imageUrl, // Ensure this value is passed correctly
      ];

      // Log the values to ensure they are correct
      console.log("Inserting into database:", values);

      await pool.query(query, values);

      return res
        .status(201)
        .json({ message: "Property added successfully!", imageUrl });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Error adding property", error: error.message });
    }
  });
});

// GET API to fetch all properties
router.get("/properties", async (req, res) => {
    try {
      // Fetch all properties from the 'properties' table
      const result = await pool.query("SELECT * FROM properties");
  
      // Check if properties were found
      if (result.rows.length === 0) {
        return res.status(404).json({ message: "No properties found." });
      }
  
      // Return the list of properties
      return res.status(200).json({ properties: result.rows });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error fetching properties", error: error.message });
    }
  });
  
  // GET API to fetch a property by ID
  router.get("/property/:id", async (req, res) => {
    const propertyId = req.params.id;
  
    try {
      // Fetch the property by its ID
      const result = await pool.query("SELECT * FROM properties WHERE id = $1", [propertyId]);
  
      // Check if the property exists
      if (result.rows.length === 0) {
        return res.status(404).json({ message: `Property with ID ${propertyId} not found.` });
      }
  
      // Return the found property
      return res.status(200).json({ property: result.rows[0] });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error fetching property by ID", error: error.message });
    }
  });
  
module.exports = router;
