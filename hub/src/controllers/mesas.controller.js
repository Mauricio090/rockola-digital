const Mesa = require("../models/mesas.model");

// Crear mesa
function createMesa(req, res) {
  const { nombre } = req.body;

  Mesa.createMesa(nombre, (err, mesa) => {
    if (err) {
      // Detectar error de duplicado en nombre
      if (err.message.includes("UNIQUE constraint failed: mesas.nombre")) {
        return res.status(400).json({ error: "El nombre de la mesa ya existe" });
      }

      return res.status(500).json({ error: err.message });
    }

    res.status(201).json(mesa);
  });
}

// Listar mesas
function getMesas(req, res) {
  Mesa.getMesas((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
}

// Obtener mesa por ID
function getMesaById(req, res) {
  const id = req.params.id;

  Mesa.getMesaById(id, (err, mesa) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!mesa) return res.status(404).json({ error: "Mesa no encontrada" });
    res.json(mesa);
  });
}

// Actualizar créditos
function updateCreditos(req, res) {
  const { id } = req.params;
  const { creditos } = req.body;

  Mesa.updateCreditos(id, creditos, (err, mesa) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(mesa);
  });
}

module.exports = {
  createMesa,
  getMesas,
  getMesaById,
  updateCreditos,
};
