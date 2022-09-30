import productos from "./routes/productos.routes.js";
import carrito from "./routes/carrito.routes.js";
import express from "express";
import pkg from "dotenv";
const app = express();

pkg.config();

const PORT = process.env.PORT;

// json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// rutas
app.use("/api/productos", productos);
app.use("/api/carrito", carrito);

// puerto
app.listen(PORT, () => {
  console.log(`Servidor levantado con éxito: ${PORT}`);
});
