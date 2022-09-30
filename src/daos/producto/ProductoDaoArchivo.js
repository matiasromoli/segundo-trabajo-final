import { Producto } from "../../container/archivo.js";
const __dirname = path.resolve();
import path from "path";

class ProductoDaoArchivo extends Producto {
  constructor() {
    super(path.join(__dirname, "/db/producto.json"));
  }
}

export default ProductoDaoArchivo;
