const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Verificación de conexión (sin retener el cliente)
pool.query('SELECT 1')
  .then(() => console.log("Base de datos PostgreSQL conectada exitosamente"))
  .catch(err => console.error("Error de conexión a la base de datos:", err.message));

module.exports = pool;