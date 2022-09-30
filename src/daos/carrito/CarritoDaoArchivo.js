import { Carrito } from "../../container/archivo.js";
const __dirname = path.resolve();
import path from "path";

class CarritoDaoArchivo extends Carrito {
  constructor() {
    super(path.join(__dirname, "/db/carrito.json"));
  }
}

export default CarritoDaoArchivo;
