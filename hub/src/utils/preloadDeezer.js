const Deezer = require("../models/deezer.model");
const { saveCache, loadCache } = require("./deezerCache"); // 👈 aquí sí funciona

async function preloadDeezerData() {
  try {
    let cache = loadCache();

    console.log("⚡ Precargando datos de Deezer...");

    // Obtener géneros
    const genres = await Deezer.getGenres();
    const formattedGenres = genres.map(g => ({
      id: g.id,
      name: g.name,
      picture: g.picture_medium
    }));

    cache.genres = formattedGenres;

    // Para cada género → obtener artistas
    cache.artists = {};
    for (const genre of formattedGenres) {
      const artists = await Deezer.getArtistsByGenre(genre.id);
      cache.artists[genre.id] = artists.map(a => ({
        id: a.id,
        name: a.name,
        picture: a.picture_medium
      }));
    }

    // Guardar todo en cache.json
    saveCache(cache);

    console.log("✅ Datos precargados en deezerCache.json");
  } catch (error) {
    console.error("❌ Error precargando Deezer:", error.message);
  }
}

module.exports = { preloadDeezerData };
