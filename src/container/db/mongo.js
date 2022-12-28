import { mongoClient } from "../../classes/mongo/mongo.client.js";
import { Error } from "../../classes/error.js";
import mongoose from "mongoose";

export class ProductoMongoDb {
  constructor(model) {
    this.collection = model;
    this.connect = mongoClient.getInstance();
  }
  async listarProducto() {
    try {
      await this.connect.connected();

      const producto = await this.collection.find();
      return producto;
    } catch (error) {
      return [];
    } finally {
      await this.connect.disconnect();
    }
  }
  async listarProductoIdent(id) {
    try {
      await this.connect.connected();

      const producto = await this.collection.findById(id);
      return producto;
    } catch (error) {
      throw new Error(500, `No existe producto con el ID: ${id}`, error);
    } finally {
      await this.connect.disconnect();
    }
  }
  async agregarNuevoProducto(product) {
    try {
      await this.connect.connected();
      const today = new Date();
      const producto = await this.collection.create({
        ...product,
        timeday: today.toLocaleString(),
      });
      return producto;
    } catch (error) {
      throw new Error(
        500,
        "No se pudo agregar el producto a la base de datos.",
        error
      );
    } finally {
      await this.connect.disconnect();
    }
  }
  async editarProducto(id, product) {
    try {
      await this.connect.connected();
      await this.collection.updateOne(
        { _id: id },
        {
          $set: {
            nombre: product.nombre,
            descri: product.descri,
            codigo: product.codigo,
            precio: product.precio,
            foto: product.foto,
            stock: product.stock,
          },
        }
      );
      return "Producto modificado con éxito:", product;
    } catch (error) {
      throw new Error(
        500,
        "No se pudo modificar el producto solicitado",
        error
      );
    } finally {
      await this.connect.disconnect();
    }
  }
  async eliminarProducto(id) {
    try {
      await this.connect.connected();
      const producto = await this.collection.deleteOne({ _id: id });
      return producto;
    } catch (error) {
      throw new Error(500, "No se pudo eliminar el producto solicitado", error);
    } finally {
      await this.connect.disconnect();
    }
  }
}
export class CarritoMongoDb {
  constructor(model) {
    this.collection = model;
    this.connect = mongoClient.getInstance();
  }
  async listarCarrito() {
    try {
      await this.connect.connected();

      const carrito = await this.collection.find();
      return carrito;
    } catch (error) {
      return [];
    } finally {
      await this.connect.disconnect();
    }
  }
  async crearCarrito(product) {
    try {
      await this.connect.connected();

      const today = new Date();
      const crearCarrito = await this.collection.create({
        ...product,
        timeday: today,
      });
      return crearCarrito;
    } catch (error) {
      throw new Error(500, "No se pudo crear el carrito.", error);
    } finally {
      await this.connect.disconnect();
    }
  }
  async deleteCarrito(id) {
    try {
      await this.connect.connected();
      const deleteCarrito = await this.collection.deleteOne({ _id: id });
      throw deleteCarrito;
    } catch (error) {
      return new Error(500, "No se pudo eliminar el carrito", error);
    } finally {
      await this.connect.disconnect();
    }
  }

  async agregarProductoCarrito(id, productoID) {
    try {
      await this.connect.connected();
      const product = new ProductoMongoDb("producto");
      const p = await product.listarProductoIdent(productoID);

      await this.collection.findByIdAndUpdate(id, {
        $push: { producto: p },
      });
      return "Producto agregado con éxito";
    } catch (error) {
      throw new Error(500, "Hubo un error, vuelva a intentarlo.", error);
    } finally {
      await this.connect.disconnect();
    }
  }
  async mostrarProductoCarrito(id) {
    try {
      await this.connect.connected();
      const carrito = await this.collection.find(
        { _id: id },
        { _id: 0, producto: 1 }
      );
      return carrito;
    } catch (error) {
      throw new Error(500, "Hubo un error, vuelva a intentarlo.", error);
    } finally {
      await this.connect.disconnect();
    }
  }
  async deleteProductoCarrito(id, productoID) {
    try {
      await this.connect.connected();
      const productoCarrito = await this.collection.updateMany(
        { _id: id },
        {
          $pull: { producto: { _id: mongoose.Types.ObjectId(productoID) } },
        }
      );
      return productoCarrito;
    } catch (error) {
      throw new Error(
        500,
        "No se pudo eliminar el producto del carrito.",
        error
      );
    } finally {
      await this.connect.disconnect();
    }
  }
}
