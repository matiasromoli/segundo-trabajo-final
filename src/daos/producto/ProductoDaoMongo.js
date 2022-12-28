import { ProductoMongoDb } from "../../container/db/mongo.js";
import Producto from "../../model/modelProducto.js";

class ProductosDaoMongoDb extends ProductoMongoDb {
  constructor() {
    super(Producto);
  }
}

export default ProductosDaoMongoDb;
