import {
  crearCarrito,
  listarCarritos,
  agregarProducto,
  eliminarCarrito,
  listarProductosCarrito,
  eliminarProductoCarrito,
} from "../services/carrito.service.js";

export const postCarrito = async (req, res) => {
  try {
    await crearCarrito();
    res.json("El carrito ha sido creado");
  } catch (error) {
    res.status(400).json(error);
  }
};
export const deleteCarrito = async (req, res) => {
  try {
    await eliminarCarrito(req.params.id);
    res.json("El carrito ha sido eliminado con exito.");
  } catch (error) {
    res.status(400).json(error);
  }
};
export const postAgregarCarrito = async (req, res) => {
  try {
    await agregarProducto(req.params.id, req.body.id);
    res.redirect("/profile");
  } catch (error) {
    res.status(400).json(error);
  }
};
export const getMostrarCarrito = async (req, res) => {
  try {
    const listaProducto = await listarProductosCarrito(req.params.id);
    res.json(listaProducto);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const deleteProductoCarrito = async (req, res) => {
  try {
    await eliminarProductoCarrito(req.params.id, req.params.idProd);
    res.json("Producto eliminado con exito");
  } catch (error) {
    res.status(400).json(error);
  }
};
export const getCarrito = async (req, res) => {
  const carrito = await listarCarritos();
  res.json(carrito);
};
