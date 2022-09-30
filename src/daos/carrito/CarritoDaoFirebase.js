import { CarritoFirebase } from "../../container/firebase.js";

class CarritoDaoFirebase extends CarritoFirebase {
  constructor() {
    super("carrito");
  }
}

export default CarritoDaoFirebase;
