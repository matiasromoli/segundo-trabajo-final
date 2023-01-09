import ProductosDaoMongoDb from "../daos/producto/productoDaoMongo.js";
import { config } from "../../config/config.js";

import { MemoriaDaoProducto } from "../daos/producto/productoDaoMemoria.js";
import { ProductoDaoArchivo } from "../daos/producto/productoDaoArchivo.js";

export class DaoFactoryProducto {
  static get() {
    switch (config.pers) {
      case "MEMORIA":
        return new MemoriaDaoProducto();
      case "ARCHIVO":
        return new ProductoDaoArchivo();
      case "MONGODB":
        return new ProductosDaoMongoDb();
      default:
        return new ProductosDaoMongoDb();
    }
  }
}
