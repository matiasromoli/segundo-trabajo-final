import {
  listarProductos,
  agregarProducto,
  editarProductos,
  listarProductosId,
  eliminarProducto,
} from "../services/productos.service.js";

export const getProductos = async (req, res) => {
  try {
    res.json(await listarProductos());
  } catch (error) {
    res.status(400).json(error);
  }
};
export const getProductosIdent = async (req, res) => {
  try {
    const producto = await listarProductosId(req.params.id);
    res.json(producto);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const postNuevoProducto = async (req, res) => {
  try {
    await agregarProducto(req.body);
    res.json("El producto se ha agregado con exito");
  } catch (error) {
    res.status(400).json(error);
  }
};
export const putEditarProducto = async (req, res) => {
  try {
    await editarProductos(req.params.id, req.body);
    res.json("El producto se ha editado con exito");
  } catch (error) {
    res.status(400).json(error);
  }
};
export const delEliminarProducto = async (req, res) => {
  try {
    await eliminarProducto(req.params.id);
    res.json("El producto se ha eliminado con exito");
  } catch (error) {
    res.status(400).json(error);
  }
};
