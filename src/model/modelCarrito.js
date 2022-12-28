import { Schema, model } from "mongoose";

const modelCarrito = Schema({
  producto: { type: [], required: true },
});

const Carrito = model("carritos", modelCarrito);
export default Carrito;
