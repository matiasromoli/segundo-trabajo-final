import { DaoFactoryProducto } from "../src/classes/DAOFactoryProducto.js";
import { DaoFactoryCarrito } from "../src/classes/DAOFactoryCarrito.js";
import { user } from "../src/model/modelUsuario.js";
import { DTOUser } from "../src/dto/DTOService.js";
import { logger } from "../config/logger.js";

const productosDao = DaoFactoryProducto.get();
const carritoDao = DaoFactoryCarrito.get();

export class sessionService {
  async listarProductoCarrito(id) {
    try {
      const carritos = await carritoDao.mostrarProductoCarrito(id, "");

      let carrito;

      for (var i = 0; i < carritos.length; i++) {
        const listaProducto = carritos[i].producto;
        carrito = listaProducto;
      }
      return carrito;
    } catch (error) {
      return logger.error(error);
    }
  }
  async usuario(datosUsuario) {
    try {
      const usuario = new DTOUser(datosUsuario);
      const data = await user.findById(usuario.user);
      return data;
    } catch (error) {
      return logger.error(error);
    }
  }
  async listarProducto() {
    try {
      const productos = await productosDao.listarProducto();
      return productos;
    } catch (error) {
      return logger.error(error);
    }
  }
  async listar() {
    try {
      const carritos = await carritoDao.listarCarrito();
      return carritos;
    } catch (error) {
      return logger.error(error);
    }
  }
}
