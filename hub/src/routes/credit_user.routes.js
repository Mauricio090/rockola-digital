const express = require("express");
const router = express.Router();
const movimientosController = require("../controllers/credit.controller");

// POST /movimientos → registrar acreditación o consumo
router.post("/", movimientosController.createMovimiento);

// GET /movimientos → historial
router.get("/", movimientosController.getMovimientos);

module.exports = router;
