import { productosDao as productoApi } from "../src/daos/index.js";

export const getProductos = async (req, res) => {
  res.json(await productoApi.listarProducto());
};
export const getProductosIdent = async (req, res) => {
  res.json(await productoApi.listarProductoIdent(req.params.id));
};
export const postNuevoProducto = async (req, res) => {
  res.json(await productoApi.agregarNuevoProducto(req.body));
};
export const putEditarProducto = async (req, res) => {
  res.json(await productoApi.editarProducto(req.params.id, req.body));
};
export const delEliminarProducto = async (req, res) => {
  res.json(await productoApi.eliminarProducto(req.params.id));
};
