const fs = require("fs");
const path = require("path");

const CACHE_FILE = path.join(__dirname, "deezerCache.json");

// 👉 Cargar cache desde archivo
function loadCache() {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      const data = fs.readFileSync(CACHE_FILE, "utf-8");
      return JSON.parse(data);
    }
    return { genres: [], artists: {} };
  } catch (error) {
    console.error("Error cargando cache:", error.message);
    return { genres: [], artists: {} };
  }
}

// 👉 Guardar cache en archivo
function saveCache(data) {
  try {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Error guardando cache:", error.message);
  }
}

module.exports = { loadCache, saveCache };
