const dotenv = require("dotenv");
dotenv.config();

const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

console.log("Loaded Environment Variables:");
console.log(process.env.SUPABASE_URL);
console.log(process.env.SUPABASE_KEY);
// const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
