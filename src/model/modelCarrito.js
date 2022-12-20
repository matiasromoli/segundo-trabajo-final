import { Schema, model } from "mongoose";

const modelCarrito = new Schema({
  producto: { type: [], required: true },
});

export const Carrito = model("carritos", modelCarrito);
