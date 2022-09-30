import {
  getProductos,
  getProductosIdent,
  postNuevoProducto,
  putEditarProducto,
  delEliminarProducto,
} from "../controllers/productos.js";
const productos = express.Router();
import express from "express";

//middleware
function rutaProtegida(req, res, next) {
  if (!process.env.ADM) {
    res.status(403).json({ msg: "No puede realizar dicha acción." });
  } else {
    next();
  }
}

// productos

productos.get("/", getProductos);
productos.get("/:id", getProductosIdent);
productos.post("/", rutaProtegida, postNuevoProducto);
productos.put("/:id", rutaProtegida, putEditarProducto);
productos.delete("/:id", rutaProtegida, delEliminarProducto);

export default productos;
