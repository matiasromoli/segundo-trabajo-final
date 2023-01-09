import { Producto } from "../../container/archivo.js";
const __dirname = path.resolve();
import path from "path";

export class ProductoDaoArchivo extends Producto {
  constructor() {
    super(path.join(__dirname, "/json/carrito.json"));
  }
}

export default ProductoDaoArchivo;
