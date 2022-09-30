import { CarritoMongoDb } from "../../container/mongo.js";

class CarritoDaoMongoDb extends CarritoMongoDb {
  constructor() {
    super("carrito", {
      producto: { type: [], required: true },
    });
  }
}

export default CarritoDaoMongoDb;
