import { mongoClient } from "../../classes/mongo/mongo.client.js";
import Producto from "../../model/modelProducto.js";
import { Error } from "../../classes/class.DTO.js";
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
    }
  }
  async agregarNuevoProducto(data) {
    try {
      await this.connect.connected();

      const today = new Date();
      const producto = await this.collection.create({
        ...data,
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
      await this.collection.findByIdAndUpdate(
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

      return await this.collection.findByIdAndDelete({ _id: id });
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
  async deleteCarrito(producto) {
    try {
      await this.connect.connected();
      return await this.collection.findByIdAndDelete({
        _id: producto.id,
      });
    } catch (error) {
      return new Error(500, "No se pudo eliminar el carrito", error);
    } finally {
      await this.connect.disconnect();
    }
  }

  async agregarProductoCarrito(data) {
    try {
      await this.connect.connected();

      const product = new ProductoMongoDb(Producto);
      const p = await product.listarProductoIdent(data.ident);

      return await this.collection.findByIdAndUpdate(data.id, {
        $push: { producto: p },
      });
    } catch (error) {
      throw new Error(500, "Hubo un error, vuelva a intentarlo.", error);
    } finally {
      await this.connect.disconnect();
    }
  }
  async mostrarProductoCarrito(data) {
    try {
      await this.connect.connected();

      const carrito = await this.collection.findById(
        { _id: data.id },
        { _id: 0, producto: 1 }
      );

      return carrito;
    } catch (error) {
      throw new Error(500, "Hubo un error, vuelva a intentarlo.", error);
    } finally {
      await this.connect.disconnect();
    }
  }
  async deleteProductoCarrito(producto) {
    try {
      await this.connect.connected();

      return await this.collection.updateMany(
        { _id: producto.id },
        {
          $pull: { producto: { _id: mongoose.Types.ObjectId(producto.ident) } },
        }
      );
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
