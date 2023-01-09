import CarritoDaoMongoDb from "../daos/carrito/carritoDaoMongo.js";
import { config } from "../../config/config.js";

import { CarritoDaoArchivo } from "../daos/carrito/carritoDaoArchivo.js";
import { MemoriaDaoCarrito } from "../daos/carrito/carritoDaoMemoria.js";

export class DaoFactoryCarrito {
  static get() {
    switch (config.pers) {
      case "MEMORIA":
        return new MemoriaDaoCarrito();
      case "ARCHIVO":
        return new CarritoDaoArchivo();
      case "MONGODB":
        return new CarritoDaoMongoDb();
      default:
        return new CarritoDaoMongoDb();
    }
  }
}
