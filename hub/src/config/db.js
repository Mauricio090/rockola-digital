const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.resolve(__dirname, "../../rockoladb.sqlite");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("❌ Error al conectar a SQLite:", err.message);
  } else {
    console.log("✅ Conectado a SQLite:", dbPath);
  }
});
db.run("PRAGMA foreign_keys = ON;");
module.exports = db;
