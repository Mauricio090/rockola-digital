const express = require("express");
const router = express.Router();
const mesaController = require("../controllers/mesas.controller");

// GET /mesas
router.get("/", mesaController.getMesas);

// GET /mesas/:id
router.get("/:id", mesaController.getMesaById);

// POST /mesas
router.post("/", mesaController.createMesa);

// PUT /mesas/:id/creditos
router.put("/:id/creditos", mesaController.updateCreditos);

module.exports = router;
