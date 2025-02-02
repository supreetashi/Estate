const { Pool } = require('pg');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false, // Required for cloud-based PostgreSQL like Supabase
    },
});

console.log("Connected to PostgreSQL Database");

// Export the pool
module.exports = pool;
