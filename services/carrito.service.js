import { DaoFactoryCarrito } from "../src/classes/DAOFactoryCarrito.js";
import { DTOCarrito } from "../src/dto/DTOService.js";
import { logger } from "../config/logger.js";

const carritoDao = DaoFactoryCarrito.get();

export class carritoService {
  async crearCarrito() {
    try {
      let productos = [];
      return await carritoDao.crearCarrito(productos);
    } catch (error) {
      logger.error(error);
    }
  }
  async listarCarritos() {
    try {
      return await carritoDao.listarCarrito();
    } catch (error) {
      logger.error(error);
    }
  }
  async eliminarCarrito(id) {
    try {
      return await carritoDao.deleteCarrito(new DTOCarrito(id, ""));
    } catch (error) {
      logger.error(error);
    }
  }
  async listarProductosCarrito(id) {
    try {
      return await carritoDao.mostrarProductoCarrito(new DTOCarrito(id, ""));
    } catch (error) {
      logger.error(error);
    }
  }
  async agregarProducto(id, ident) {
    try {
      const agregar = await carritoDao.agregarProductoCarrito(
        new DTOCarrito(id, ident)
      );
      return agregar;
    } catch (error) {
      logger.error(error);
    }
  }
  async eliminarProductoCarrito(id, ident) {
    try {
      return await carritoDao.deleteProductoCarrito(new DTOCarrito(id, ident));
    } catch (error) {
      logger.error(error);
    }
  }
}
