import {
  getProductos,
  getProductosIdent,
  postNuevoProducto,
  putEditarProducto,
  delEliminarProducto,
} from "../controllers/productos.js";
const productos = express.Router();
import express from "express";

function rutaProtegida(req, res, next) {
  if (!process.env.ADM) {
    res.status(403).json({ msg: "No puede realizar dicha acción." });
  } else {
    next();
  }
}

productos.get("/", getProductos);
productos.post("/", postNuevoProducto);
productos.get("/:id", getProductosIdent);
productos.put("/:id", rutaProtegida, putEditarProducto);
productos.delete("/:id", rutaProtegida, delEliminarProducto);

export default productos;
