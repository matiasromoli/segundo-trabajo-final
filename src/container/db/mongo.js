import { logger } from "../../../utils/log/logger.js";
import { config } from "../../../config/config.js";
import mongoose from "mongoose";

(async () => {
  const db = await mongoose.connect(config.mongodb.uri, config.mongodb.options);
  db ? logger.info("Connected Mongo DB") : null;
})();

export class ProductoMongoDb {
  constructor(nameCollection, schema) {
    this.collection = mongoose.model(nameCollection, schema);
  }
  async listarProducto() {
    try {
      const producto = await this.collection.find();
      return producto;
    } catch (error) {
      return [];
    }
  }
  async listarProductoIdent(id) {
    try {
      const producto = await this.collection.findById(id);
      return producto;
    } catch (error) {
      return `No existe producto con el ID: ${id}`;
    }
  }
  async agregarNuevoProducto(product) {
    try {
      const today = new Date();
      const producto = await this.collection.create({
        ...product,
        timeday: today.toLocaleString(),
      });
      return producto;
    } catch (error) {
      return "No se pudo agregar el producto a la base de datos.";
    }
  }
  async editarProducto(id, product) {
    try {
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
      return error;
    }
  }
  async eliminarProducto(id) {
    try {
      const producto = await this.collection.deleteOne({ _id: id });
      return producto;
    } catch (error) {
      return error;
    }
  }
}

export class CarritoMongoDb {
  constructor(nameCollection, schema) {
    this.collection = mongoose.model(nameCollection, schema);
  }
  async listarCarrito() {
    try {
      const carrito = await this.collection.find();
      return carrito;
    } catch (error) {
      return [];
    }
  }
  async crearCarrito(product) {
    try {
      const today = new Date();
      const crearCarrito = await this.collection.create({
        ...product,
        timeday: today,
      });
      return crearCarrito;
    } catch (error) {
      return "No se pudo crear el carrito.";
    }
  }
  async deleteCarrito(id) {
    try {
      const deleteCarrito = await this.collection.deleteOne({ _id: id });
      return deleteCarrito;
    } catch (error) {
      return error;
    }
  }

  async agregarProductoCarrito(id, productoID) {
    try {
      const product = new ProductoMongoDb("producto");
      const p = await product.listarProductoIdent(productoID);

      await this.collection.findByIdAndUpdate(id, {
        $push: { producto: p },
      });
      return "Producto agregado con éxito";
    } catch (error) {
      return "Hubo un error, vuelva a intentarlo.";
    }
  }
  async mostrarProductoCarrito(id) {
    try {
      const carrito = await this.collection.find(
        { _id: id },
        { _id: 0, producto: 1 }
      );
      return carrito;
    } catch (error) {
      return "Se ha producido un error.";
    }
  }
  async deleteProductoCarrito(id, productoID) {
    try {
      const productoCarrito = await this.collection.updateMany(
        { _id: id },
        {
          $pull: { producto: { _id: mongoose.Types.ObjectId(productoID) } },
        }
      );
      return productoCarrito;
    } catch (error) {}
  }
}
