import { carritoDao as carritoApi } from "../src/daos/index.js";

export async function crearCarrito() {
  let productos = [];
  return await carritoApi.crearCarrito(productos);
}
export async function listarCarritos() {
  return await carritoApi.listarCarrito();
}
export async function eliminarCarrito(id) {
  return await carritoApi.deleteCarrito(id);
}
export async function listarProductosCarrito(id) {
  return await carritoApi.mostrarProductoCarrito(id);
}
export async function agregarProducto(id, ident) {
  const agregar = await carritoApi.agregarProductoCarrito(id, ident);
  return agregar;
}
export async function eliminarProductoCarrito(id, ident) {
  return await carritoApi.deleteProductoCarrito(id, ident);
}
