import { memoriaCarrito } from "../../container/memoria.js";

export class MemoriaDaoCarrito extends memoriaCarrito {
  constructor() {
    let carrito = [];
    super(carrito);
  }
}

export default MemoriaDaoCarrito;
