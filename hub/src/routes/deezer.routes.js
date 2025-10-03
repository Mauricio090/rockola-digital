const express = require("express");
const router = express.Router();
const DeezerController = require("../controllers/deezer.controller");

// Endpoints
router.get("/genres", DeezerController.getGenres);
router.get("/genres/:genreId/artists", DeezerController.getArtistsByGenre);
router.get("/songs/:artistId", DeezerController.getSongsByArtist);
router.get("/search", DeezerController.search);

module.exports = router;
