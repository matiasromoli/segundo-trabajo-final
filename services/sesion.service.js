import Producto from "../src/model/modelProducto.js";
import { user } from "../src/model/modelUsuario.js";
import Carrito from "../src/model/modelCarrito.js";

import { ProductoMongoDb } from "../src/container/db/mongo.js";
import { CarritoMongoDb } from "../src/container/db/mongo.js";

const productoApp = new ProductoMongoDb(Producto);
const carritosApp = new CarritoMongoDb(Carrito);
import { logger } from "../config/logger.js";

export class sessionService {
  async listarProductoCarrito(id) {
    try {
      const carritos = await carritosApp.mostrarProductoCarrito(id);
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
      const data = await user.findById(datosUsuario);
      return data;
    } catch (error) {
      return logger.error(error);
    }
  }
  async listarProducto() {
    try {
      const productos = await productoApp.listarProducto();
      return productos;
    } catch (error) {
      return logger.error(error);
    }
  }
  async listar() {
    try {
      const carritos = await carritosApp.listarCarrito();
      return carritos;
    } catch (error) {
      return logger.error(error);
    }
  }
}
