const formidable = require("formidable");
const supabase = require("../config/supabaseClient");
const pool = require("../config/db");

// Function to add property
const addProperty = (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res
        .status(400)
        .json({ message: "Error parsing the form", error: err });
    }

    try {
      if (!files.image || files.image.length === 0) {
        return res.status(400).json({ message: "No image file provided." });
      }

      const file = files.image[0];
      const filePath = `property_images/${file.originalFilename}`;

      const { data, error: uploadError } = await supabase.storage
        .from("Images")
        .upload(filePath, file.filepath, {
          contentType: file.mimetype,
        });

      if (uploadError) {
        return res
          .status(500)
          .json({ message: "Error uploading image", error: uploadError });
      }

      const imageUrl = `https://wgulsalguiyuyajkgide.supabase.co/storage/v1/object/public/Images/${encodeURIComponent(
        filePath
      )}`;

      const {
        title,
        description,
        price,
        location,
        category,
        owner_name,
        owner_contact,
      } = fields;

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
        imageUrl,
      ];

      await pool.query(query, values);

      return res
        .status(201)
        .json({ message: "Property added successfully!", imageUrl });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error adding property", error: error.message });
    }
  });
};

// Function to get all properties
const getAllProperties = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM properties");
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "No properties found." });
    }
    return res.status(200).json({ properties: result.rows });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error fetching properties", error: error.message });
  }
};

// Function to get a property by ID
const getPropertyById = async (req, res) => {
  const propertyId = req.params.id;
  try {
    const result = await pool.query("SELECT * FROM properties WHERE id = $1", [
      propertyId,
    ]);
    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ message: `Property with ID ${propertyId} not found.` });
    }
    return res.status(200).json({ property: result.rows[0] });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error fetching property by ID", error: error.message });
  }
};

module.exports = { addProperty, getAllProperties, getPropertyById };
