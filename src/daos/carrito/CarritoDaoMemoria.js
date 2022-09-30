import { memoriaCarrito } from "../../container/memoria.js";

class MemoriaDaoCarrito extends memoriaCarrito {
  constructor() {
    let carrito = [];
    super(carrito);
  }
}

export default MemoriaDaoCarrito;
