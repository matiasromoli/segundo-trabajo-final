import { productosDao as productoApi } from "../src/daos/index.js";

export async function editarProductos(id, ident) {
  return await productoApi.editarProducto(id, ident);
}
export async function listarProductos() {
  return await productoApi.listarProducto();
}
export async function eliminarProducto(id) {
  return await productoApi.eliminarProducto(id);
}
export async function listarProductosId(id) {
  return await productoApi.listarProductoIdent(id);
}
export async function agregarProducto(body) {
  return await productoApi.agregarNuevoProducto(body);
}
