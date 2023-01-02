import { carritoDao } from "../src/daos/index.js";
import { logger } from "../config/logger.js";

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
      return await carritoDao.deleteCarrito(id);
    } catch (error) {
      logger.error(error);
    }
  }
  async listarProductosCarrito(id) {
    try {
      return await carritoDao.mostrarProductoCarrito(id);
    } catch (error) {
      logger.error(error);
    }
  }
  async agregarProducto(id, ident) {
    try {
      const agregar = await carritoDao.agregarProductoCarrito(id, ident);
      return agregar;
    } catch (error) {
      logger.error(error);
    }
  }
  async eliminarProductoCarrito(id, ident) {
    try {
      return await carritoDao.deleteProductoCarrito(id, ident);
    } catch (error) {
      logger.error(error);
    }
  }
}
