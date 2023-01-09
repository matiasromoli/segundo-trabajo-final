import { Carrito } from "../../container/archivo.js";
const __dirname = path.resolve();
import path from "path";

export class CarritoDaoArchivo extends Carrito {
  constructor() {
    super(path.join(__dirname, "/json/carrito.json"));
  }
}

export default CarritoDaoArchivo;
