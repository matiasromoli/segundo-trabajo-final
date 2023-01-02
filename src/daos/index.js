import ProductoDaoMongoDb from "./producto/productoDaoMongo.js";
import CarritoDaoMongoDb from "./carrito/carritoDaoMongo.js";
import Producto from "../model/modelProducto.js";
import { config } from "../../config/config.js";
import Carrito from "../model/modelCarrito.js";

let productosDao;
let carritoDao;

switch (config.pers) {
  case "mongo":
    productosDao = new ProductoDaoMongoDb(Producto);
    carritoDao = new CarritoDaoMongoDb(Carrito);
    break;
}

export { productosDao, carritoDao };
