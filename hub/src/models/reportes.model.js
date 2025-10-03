const db = require("../config/db");

// Reporte de créditos en un rango de fechas
function getReporte(fechaInicio, fechaFin, callback) {
  db.all(
    `SELECT tipo, SUM(monto) as total
     FROM movimientos_creditos
     WHERE DATE(fecha) BETWEEN DATE(?) AND DATE(?)
     GROUP BY tipo`,
    [fechaInicio, fechaFin],
    callback
  );
}
module.exports = { getReporte };
