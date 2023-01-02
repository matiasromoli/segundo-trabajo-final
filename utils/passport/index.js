import { mongoClient } from "../../src/classes/mongo/mongo.client.js";
import { user } from "../../src/model/modelUsuario.js";
import { Usuario } from "../../src/classes/class.js";

const mongo = mongoClient.getInstance();

export async function createUser(name, password, email, address, phone, image) {
  try {
    await mongo.connected();

    const usuario = new Usuario(name, password, email, address, phone, image);
    const db = await user.create(usuario);

    return db;
  } catch (error) {
    console.log(error);
  }
}
export async function verifyEmail(email) {
  try {
    await mongo.connected();

    const data = await user.findOne({ email });
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    await mongo.disconnect();
  }
}
export async function deserialize(id) {
  try {
    await mongo.connected();

    const usuario = await user.findById(id);
    return usuario;
  } catch (error) {
    console.log(error);
  }
}
