const express = require("express");
const router = express.Router();
const reportesController = require("../controllers/reportes.controller");

// GET /reportes?fechaInicio=YYYY-MM-DD&fechaFin=YYYY-MM-DD
router.get("/", reportesController.getReporte);

module.exports = router;
