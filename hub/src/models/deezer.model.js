// models/deezer.model.js
const axios = require("axios");

async function getGenres() {
  const url = "https://api.deezer.com/genre";
  const { data } = await axios.get(url);
  return data.data.filter(g => g.id !== 0);
}

async function getArtistsByGenre(genreId) {
  const url = `https://api.deezer.com/genre/${genreId}/artists`;
  const { data } = await axios.get(url);
  return data.data;
}

async function getSongsByArtist(artistId) {
  const url = `https://api.deezer.com/artist/${artistId}/top?limit=50`;
  const { data } = await axios.get(url);
  return data.data;
}

async function search(query) {
  const url = `https://api.deezer.com/search?q=${encodeURIComponent(query)}`;
  const { data } = await axios.get(url);
  return data.data;
}

module.exports = { getGenres, getArtistsByGenre, getSongsByArtist, search };
