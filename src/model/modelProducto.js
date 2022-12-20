import { Schema, model } from "mongoose";

export const modelProducto = new Schema({
  nombre: { type: String, required: true },
  descri: { type: String, required: true },
  timeday: { type: String, required: true },
  codigo: { type: String, required: true },
  precio: { type: Number, required: true },
  foto: { type: String, required: true },
  stock: { type: Number, required: true },
});

const Producto = model("productos", modelProducto);
export default Producto;
