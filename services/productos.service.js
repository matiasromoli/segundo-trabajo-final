import { DaoFactoryProducto } from "../src/classes/DAOFactoryProducto.js";
import { DTOProducto } from "../src/dto/DTOService.js";
import { logger } from "../config/logger.js";

const productosDao = DaoFactoryProducto.get();

export class productosService {
  async editarProductos(id, producto) {
    try {
      return await productosDao.editarProducto(id, producto);
    } catch (error) {
      return logger.error(error);
    }
  }
  async listarProductos() {
    try {
      return await productosDao.listarProducto();
    } catch (error) {
      return logger.error(error);
    }
  }
  async eliminarProducto(id) {
    try {
      return await productosDao.eliminarProducto(id);
    } catch (error) {
      return logger.error(error);
    }
  }
  async listarProductosId(id) {
    try {
      return await productosDao.listarProductoIdent(id);
    } catch (error) {
      return logger.error(error);
    }
  }
  async agregarProducto(body) {
    try {
      return await productosDao.agregarNuevoProducto(new DTOProducto(body));
    } catch (error) {
      return logger.error(error);
    }
  }
}
