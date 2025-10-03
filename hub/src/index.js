const express = require("express");
const cors = require("cors");

const mesasRoutes = require("./routes/mesas.routes");
const creditsRoutes = require("./routes/credit_user.routes");
const reportesRoutes = require("./routes/reportes.routes");
const deezerRoutes = require("./routes/deezer.routes");
const { preloadDeezerData } = require("./utils/preloadDeezer");

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/mesas", mesasRoutes);
app.use("/credits", creditsRoutes);
app.use("/reportes", reportesRoutes);
app.use("/deezer", deezerRoutes);

const PORT = 3000;
app.listen(PORT, async () => {
  console.log(`🚀 Hub corriendo en http://localhost:${PORT}`);
  await preloadDeezerData(); // 👈 se ejecuta al arrancar
});
