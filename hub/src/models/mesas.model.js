const db = require("../config/db");

// Obtener todas las mesas
function getMesas(callback) {
  db.all("SELECT * FROM mesas", [], callback);
}

// Crear nueva mesa
function createMesa(nombre, callback) {
  db.run(
    "INSERT INTO mesas (nombre, creditos) VALUES (?, 0)",
    [nombre],
    function (err) {
      callback(err, { id: this.lastID, nombre, saldo: 0 });
    }
  );
}

// Actualizar créditos
function updateCreditos(id, creditos, callback) {
  db.run(
    "UPDATE mesas SET creditos = ? WHERE id = ?",
    [creditos, id],
    function (err) {
      callback(err, { id, creditos });
    }
  );
}

module.exports = { getMesas, createMesa, updateCreditos };
