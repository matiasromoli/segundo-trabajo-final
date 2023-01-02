import { Error } from "../class.js";

export class mongoError {
  async conn() {
    return new Error(500, "No se pudo conectar a la base de datos");
  }
  async disc() {
    return new Error(500, "No se pudo desconectar la base de datos");
  }
}
