const Movimiento = require("../models/credit_user.model");
const Mesa = require("../models/mesas.model");

// Crear movimiento y actualizar créditos
function createMovimiento(req, res) {
  const { mesa_id, tipo, monto } = req.body;

  if (!mesa_id || !tipo || !monto) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  // 1. Insertar movimiento
  Movimiento.createMovimiento(mesa_id, tipo, monto, (err, mov) => {
    if (err) return res.status(500).json({ error: err.message });

    // 2. Buscar mesa y actualizar saldo
    Mesa.getMesas((err2, mesas) => {
      if (err2) return res.status(500).json({ error: err2.message });
      const mesa = mesas.find(m => m.id == mesa_id);
      if (!mesa) return res.status(404).json({ error: "Mesa no encontrada" });

      let nuevoSaldo = mesa.creditos;
      if (tipo === "entrada") nuevoSaldo += monto;
      if (tipo === "salida") nuevoSaldo -= monto;

      // 🚨 Validar saldo negativo antes de actualizar
      if (nuevoSaldo < 0) {
        return res.status(400).json({ error: "Saldo insuficiente" });
      }

      Mesa.updateCreditos(mesa_id, nuevoSaldo, (err3) => {
        if (err3) return res.status(500).json({ error: err3.message });
        res.json({ ...mov, nuevoSaldo });
      });
    });
  });
}


// Obtener historial de movimientos
function getMovimientos(req, res) {
  Movimiento.getMovimientos((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
}

module.exports = {
  createMovimiento,
  getMovimientos
};
