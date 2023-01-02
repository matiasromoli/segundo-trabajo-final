import { carritoService } from "../services/carrito.service.js";

export const carritoApp = new carritoService();

export const postCarrito = async (req, res) => {
  try {
    await carritoApp.crearCarrito();
    res.json("El carrito ha sido creado");
  } catch (error) {
    res.status(400).json(error);
  }
};
export const deleteCarrito = async (req, res) => {
  try {
    await carritoApp.eliminarCarrito(req.params.id);
    res.json("El carrito ha sido eliminado con exito.");
  } catch (error) {
    res.status(400).json(error);
  }
};
export const postAgregarCarrito = async (req, res) => {
  try {
    await carritoApp.agregarProducto(req.params.id, req.body.id);
    res.redirect("/profile");
  } catch (error) {
    res.status(400).json(error);
  }
};
export const getMostrarCarrito = async (req, res) => {
  try {
    const listaProducto = await carritoApp.listarProductosCarrito(
      req.params.id
    );
    res.json(listaProducto);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const deleteProductoCarrito = async (req, res) => {
  try {
    await carritoApp.eliminarProductoCarrito(req.params.id, req.params.idProd);
    res.json("Producto eliminado con exito");
  } catch (error) {
    res.status(400).json(error);
  }
};
export const getCarrito = async (req, res) => {
  const carrito = await carritoApp.listarCarritos();
  res.json(carrito);
};
