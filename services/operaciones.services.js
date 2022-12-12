import {
  productosDao as productoApp,
  carritoDao as carritosApp,
} from "../src/daos/index.js";
import { user } from "../src/model/modelUsuario.js";

export async function listarProductoCarrito(id) {
  const carritos = await carritosApp.mostrarProductoCarrito(id);
  let carrito;

  for (var i = 0; i < carritos.length; i++) {
    const listaProducto = carritos[i].producto;
    carrito = listaProducto;
  }
  return carrito;
}
export function logoutSesion(req, res, next) {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
    next();
  });
}
export async function usuario(datosUsuario) {
  const data = await user.findById(datosUsuario);
  return data;
}
export async function listarProducto() {
  const productos = await productoApp.listarProducto();
  return productos;
}
export async function listar() {
  const carritos = await carritosApp.listarCarrito();
  return carritos;
}
