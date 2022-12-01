import config from "../../config/config.js";
import admin from "firebase-admin";

admin.initializeApp({
  credential: admin.credential.cert(config.firebase.url),
});

// conect
console.log("Servidor Firebase conectado con éxito");

const db = admin.firestore();

export class ProductoFirebase {
  constructor(nameCollection) {
    this.collection = db.collection(nameCollection);
  }
  async listarProducto() {
    try {
      const listaProducto = await this.collection.get();
      const listaProductoMap = listaProducto.docs.map((product) =>
        product.data()
      );
      return listaProductoMap;
    } catch (error) {
      return [];
    }
  }
  async listarProductoIdent(id) {
    try {
      const doc = this.collection.doc(id);
      const listaProducto = await doc.get();
      return listaProducto.data();
    } catch (error) {
      return error;
    }
  }
  async agregarNuevoProducto(product) {
    try {
      const doc = this.collection.doc();
      const nuevoProducto = await doc.create(product);
      if (nuevoProducto) return "Producto creado con éxito";
    } catch (error) {
      return "Ocurrió un error al agregar el producto.";
    }
  }
  async editarProducto(id, product) {
    try {
      const doc = this.collection.doc(id);
      const listaProducto = await doc.update({ product });
      return listaProducto;
    } catch (error) {
      return "Error al editar el producto.";
    }
  }
  async eliminarProducto(id) {
    try {
      const doc = this.collection.doc(id);
      const borrarProducto = await doc.delete();
      return `El producto ${id} ha sido borrado con éxito`;
    } catch (error) {
      return "Error al eliminar el producto.";
    }
  }
}

export class CarritoFirebase {
  constructor(nameCollection) {
    this.collection = db.collection(nameCollection);
  }
  async listarCarrito() {
    try {
      const listarCarrito = await this.collection.get();
      const listarCarritoMap = listarCarrito.docs.map((carrito) =>
        carrito.data()
      );
      return listarCarritoMap;
    } catch (error) {
      return [];
    }
  }
  async crearCarrito(product) {
    try {
      const today = new Date();
      const doc = this.collection.doc();
      await doc.create({ product, timeday: today });

      return "Carrito creado con éxito.";
    } catch (error) {
      return "No se pudo crear el carrito";
    }
  }
  async deleteCarrito(id) {
    try {
      const doc = this.collection.doc(id);
      const borrarCarrito = await doc.delete();
      return `El carrito ${id} ha sido eliminado con éxito.`;
    } catch (error) {
      return "Error al eliminar el carrito";
    }
  }

  //productos
  async agregarProductoCarrito(id, productoIDENT) {
    try {
      const product = new ProductoFirebase("producto");
      const productoID = await product.listarProductoIdent(productoIDENT);
      //agregar al carrito

      this.collection.doc(id).update({ product: productoID });
      return "Producto agregado con éxito";
    } catch (error) {
      return console.log(error);
    }
  }
  async mostrarProductoCarrito(id) {
    try {
      const doc = this.collection.doc(id);
      const listaProducto = await doc.get();
      return listaProducto.data().product;
    } catch (error) {
      return "No se ha podido cargar la lista de productos.";
    }
  }
  async deleteProductoCarrito(id, productoID) {
    try {
      const doc = this.collection.doc(id);
      const producto = await doc.collection("product").doc(productoID).delete();

      return producto;
    } catch (error) {}
  }
}
