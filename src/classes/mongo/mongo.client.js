import { logger } from "../../../config/logger.js";
import { config } from "../../../config/config.js";
import { mongoError } from "./mongo.error.js";
import mongoose from "mongoose";

let instance = null;

export class mongoClient extends mongoError {
  constructor() {
    super();
    this.client = mongoose;
  }

  async connected() {
    try {
      await this.client.connect(config.mongodb.uri, config.mongodb.options);
      logger.info("DB connected");
    } catch (error) {
      const err = this.disc();
      logger.error(err);
    }
  }
  async disconnect() {
    try {
      await this.client.connection.close();
      logger.info("Server disconnected");
    } catch (error) {
      const err = this.conn();
      logger.error(err);
    }
  }
  static getInstance() {
    if (!instance) {
      instance = new mongoClient();
    }

    return instance;
  }
}
