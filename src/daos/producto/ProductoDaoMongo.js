import { ProductoMongoDb } from "../../container/db/mongo.js";

class ProductosDaoMongoDb extends ProductoMongoDb {
  constructor() {
    super("producto", {
      nombre: { type: String, required: true },
      descri: { type: String, required: true },
      timeday: { type: String, required: true },
      codigo: { type: String, required: true },
      precio: { type: Number, required: true },
      foto: { type: String, required: true },
      stock: { type: Number, required: true },
    });
  }
}

export default ProductosDaoMongoDb;
