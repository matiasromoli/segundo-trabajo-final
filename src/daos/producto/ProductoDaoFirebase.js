import { ProductoFirebase } from "../../container/firebase.js";

class ProductoDaoFirebase extends ProductoFirebase {
  constructor() {
    super("producto");
  }
}

export default ProductoDaoFirebase;
