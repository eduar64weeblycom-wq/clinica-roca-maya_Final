const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect()
  .then(() => console.log("Base de datos PostgreSQL (Supabase) conectada exitosamente"))
  .catch(err => console.error("Error de conexión a la base de datos:", err.message));

module.exports = pool;