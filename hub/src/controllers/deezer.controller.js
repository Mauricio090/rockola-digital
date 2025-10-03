const Deezer = require("../models/deezer.model");

// 👉 Obtener géneros (solo nombre + imagen)
async function getGenres(req, res) {
  try {
    const genres = await Deezer.getGenres();
    const results = genres.map(g => ({
      id: g.id,
      name: g.name,
      picture: g.picture_medium
    })).sort((a, b) => a.name.localeCompare(b.name));

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// 👉 Obtener artistas de un género (solo nombre + imagen)
async function getArtistsByGenre(req, res) {
  try {
    const { genreId } = req.params;
    const artists = await Deezer.getArtistsByGenre(genreId);
    const results = artists.map(a => ({
      id: a.id,
      name: a.name,
      picture: a.picture_medium
    })).sort((a, b) => a.name.localeCompare(b.name));

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo artistas" });
  }
}

// 👉 Obtener canciones de un artista
async function getSongsByArtist(req, res) {
  try {
    const { artistId } = req.params;
    const songs = await Deezer.getSongsByArtist(artistId);

    const results = songs.map(s => ({
      id: s.id,
      title: s.title,
      preview: s.preview,
      artist: s.artist.name,
      cover: s.album.cover_medium
    }));

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo canciones" });
  }
}

// 👉 Búsqueda en Deezer
async function search(req, res) {
  try {
    const { q } = req.query;
    const songs = await Deezer.search(q);

    const results = songs.map(s => ({
      id: s.id,
      title: s.title,
      preview: s.preview,
      artist: s.artist.name,
      cover: s.album.cover_medium
    }));

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Error en búsqueda" });
  }
}

module.exports = { 
  getGenres, 
  getArtistsByGenre, 
  getSongsByArtist, 
  search 
};
