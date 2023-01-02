import { productosService } from "../services/productos.service.js";

const productoApp = new productosService();

export const getProductos = async (req, res) => {
  try {
    res.status(200).json(await productoApp.listarProductos());
  } catch (error) {
    res.status(400).json(error);
  }
};
export const getProductosIdent = async (req, res) => {
  try {
    const producto = await productoApp.listarProductosId(req.params.id);
    res.status(200).json(producto);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const postNuevoProducto = async (req, res) => {
  try {
    await productoApp.agregarProducto(req.body);
    res.status(200).json("El producto se ha agregado con exito");
  } catch (error) {
    res.status(400).json(error);
  }
};
export const putEditarProducto = async (req, res) => {
  try {
    await productoApp.editarProductos(req.params.id, req.body);
    res.status(200).json("El producto se ha editado con exito");
  } catch (error) {
    res.status(400).json(error);
  }
};
export const delEliminarProducto = async (req, res) => {
  try {
    await productoApp.eliminarProducto(req.params.id);
    res.status(200).json("El producto se ha eliminado con exito");
  } catch (error) {
    res.status(400).json(error);
  }
};
