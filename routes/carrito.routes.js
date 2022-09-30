import {
  getCarrito,
  postCarrito,
  deleteCarrito,
  getMostrarCarrito,
  postAgregarCarrito,
  deleteProductoCarrito,
} from "../controllers/carrito.js";
const carrito = express.Router();
import express from "express";

carrito.get("/", getCarrito);
carrito.post("/", postCarrito);
carrito.delete("/:id", deleteCarrito);
carrito.get("/:id/productos", getMostrarCarrito);
carrito.post("/:id/productos", postAgregarCarrito);
carrito.delete("/:id/productos/:idProd", deleteProductoCarrito);

export default carrito;
