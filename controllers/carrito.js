import { carritoDao as carritoApi } from "../src/daos/index.js";

export const postCarrito = async (req, res) => {
  let productos = [];
  res.json(await carritoApi.crearCarrito(productos));
};

export const deleteCarrito = async (req, res) => {
  res.json(await carritoApi.deleteCarrito(req.params.id));
};

export const postAgregarCarrito = async (req, res) => {
  res.json(await carritoApi.agregarProductoCarrito(req.params.id, req.body.id));
  console.log(req.body);
};

export const getMostrarCarrito = async (req, res) => {
  res.json(await carritoApi.mostrarProductoCarrito(req.params.id));
};

export const deleteProductoCarrito = async (req, res) => {
  res.json(
    await carritoApi.deleteProductoCarrito(req.params.id, req.params.idProd)
  );
};

export const getCarrito = async (req, res) => {
  res.json(await carritoApi.listarCarrito(req.params.id));
};
