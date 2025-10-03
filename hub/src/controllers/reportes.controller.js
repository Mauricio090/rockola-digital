const Reporte = require("../models/reportes.model");

// Obtener reporte de créditos en un rango de fechas
function getReporte(req, res) {
  const { fechaInicio, fechaFin } = req.query;

  if (!fechaInicio || !fechaFin) {
    return res.status(400).json({ error: "Faltan parámetros fechaInicio o fechaFin" });
  }

  Reporte.getReporte(fechaInicio, fechaFin, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
}

module.exports = { getReporte };
