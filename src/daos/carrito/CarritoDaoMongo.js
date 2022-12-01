import { CarritoMongoDb } from "../../container/db/mongo.js";

class CarritoDaoMongoDb extends CarritoMongoDb {
  constructor() {
    super("carrito", {
      producto: { type: [], required: true },
    });
  }
}

export default CarritoDaoMongoDb;
