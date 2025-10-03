const db = require("../config/db");

// Crear un movimiento de crédito
function createMovimiento(mesa_id, tipo, monto, callback) {
  const fecha = new Date().toLocaleString("sv-SE").replace('T', ' ');
  
  db.run(
    "INSERT INTO movimientos_creditos (mesa_id, tipo, monto, fecha) VALUES (?, ?, ?, ?)",
    [mesa_id, tipo, monto, fecha],
    function (err) {
      callback(err, { id: this.lastID, mesa_id, tipo, monto, fecha });
    }
  );
}

// Obtener todos los movimientos
function getMovimientos(callback) {
  db.all("SELECT * FROM movimientos_creditos", [], callback);
}

module.exports = { createMovimiento, getMovimientos };
