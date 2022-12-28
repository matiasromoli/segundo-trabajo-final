import { CarritoMongoDb } from "../../container/db/mongo.js";
import Carrito from "../../model/modelCarrito.js";

class CarritoDaoMongoDb extends CarritoMongoDb {
  constructor() {
    super(Carrito);
  }
}

export default CarritoDaoMongoDb;
