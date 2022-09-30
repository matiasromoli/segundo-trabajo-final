import fs from "fs/promises";

export class Producto {
  constructor(ruta) {
    this.ruta = ruta;
  }

  async listarProducto() {
    try {
      const listaProducto = await fs.readFile(this.ruta, "utf-8");
      return JSON.parse(listaProducto);
    } catch (error) {
      return [];
    }
  }
  async listarProductoIdent(ident) {
    const listaProducto = await this.listarProducto();
    const productoParams = listaProducto.find((p) => p.id === parseInt(ident));
    const resultadoProducto = !productoParams
      ? `No existe el producto solicitado con el ID ${ident}`
      : productoParams;

    return resultadoProducto;
  }
  async agregarNuevoProducto(producto) {
    const listaProducto = await this.listarProducto();
    const today = new Date();
    let productoID;

    listaProducto.length === 0
      ? (productoID = 1)
      : (productoID = listaProducto[listaProducto.length - 1].id + 1);

    listaProducto.push({
      id: productoID,
      ...producto,
      timeDay: today.toLocaleString(),
    });

    await fs.writeFile(this.ruta, JSON.stringify(listaProducto, null, 2));

    return "Producto guardado con éxito.";
  }
  async editarProducto(ident, producto) {
    const listaProducto = await this.listarProducto();

    const p = listaProducto.find((p) => p.id === parseInt(ident));
    const resultadoBusqueda = listaProducto.indexOf(p);

    if (resultadoBusqueda === -1) {
      return `No existe producto con el ID: ${ident}`;
    } else {
      p.nombre = producto.nombre;
      p.descri = producto.descri;
      p.codigo = producto.codigo;
      p.precio = producto.precio;
      p.image = producto.image;
      p.stock = producto.stock;

      await fs.writeFile(this.ruta, JSON.stringify(listaProducto, null, 2));
      return "Producto modificado con éxito.";
    }
  }
  async eliminarProducto(ident) {
    const listaProducto = await this.listarProducto();

    const p = listaProducto.find((p) => p.id === parseInt(ident));
    const resultadoBusqueda = listaProducto.indexOf(p);

    if (resultadoBusqueda === -1) {
      return `No existe producto con el ID: ${ident}`;
    } else {
      listaProducto.splice(resultadoBusqueda, 1);
      await fs.writeFile(this.ruta, JSON.stringify(listaProducto, null, 2));
      return `El producto seleccionado fue borrado con exito.`;
    }
  }
}

export class Carrito {
  constructor(ruta) {
    this.ruta = ruta;
  }
  async listarCarrito() {
    try {
      const listarCarrito = await fs.readFile(this.ruta, "utf-8");
      return JSON.parse(listarCarrito);
    } catch (error) {
      return [];
    }
  }
  async crearCarrito(productos) {
    const listaDeCarritos = await this.listarCarrito();
    const today = new Date();
    let id;

    listaDeCarritos.length === 0
      ? (id = 1)
      : (id = listaDeCarritos[listaDeCarritos.length - 1].id + 1);

    listaDeCarritos.push({ productos, id, timeDay: today });

    await fs.writeFile(this.ruta, JSON.stringify(listaDeCarritos, null, 2));
    return `El id del carrito es ${id}`;
  }
  async deleteCarrito(ident) {
    const listaDeCarritos = await this.listarCarrito();

    const c = listaDeCarritos.find((c) => c.id === parseInt(ident));
    const resultadoBusqueda = listaDeCarritos.indexOf(c);

    // existe - no existe

    if (resultadoBusqueda === -1) {
      return `No existe el carrito con el id: ${ident}`;
    } else {
      listaDeCarritos.splice(resultadoBusqueda, 1);
      await fs.writeFile(this.ruta, JSON.stringify(listaDeCarritos, null, 2));
      return `El carrito seleccionado fue borrado con éxito.`;
    }
  }

  // productos

  async agregarProductoCarrito(ident, productoID) {
    const listaDeCarritos = await this.listarCarrito();
    if (!listaDeCarritos[ident - 1]) return `El carrito: ${ident} no existe.`;

    //obtener productos
    const obtenerProducto = new Producto("./db/producto.json");
    const listaProductos = await obtenerProducto.listarProducto();

    const p = listaProductos.find((p) => p.id === parseInt(productoID));
    if (!p) {
      return `El producto no existe.`;
    } else {
      // carrito
      const carrito = listaDeCarritos[ident - 1].productos;
      carrito.push(p);

      // guardar
      listaDeCarritos[ident - 1] = { ...listaDeCarritos[ident - 1] };
      await fs.writeFile(this.ruta, JSON.stringify(listaDeCarritos, null, 2));
      return `Producto agregado exitosamente al carrito ${ident}.`;
    }
  }
  async mostrarProductoCarrito(ident) {
    const listaDeCarritos = await this.listarCarrito();
    const carritoID = listaDeCarritos.find((c) => c.id === parseInt(ident));
    // existencia - carrito
    if (!carritoID) return `No existe el carrito con el id: ${ident}`;
    // carrito vacío o no
    if (carritoID.productos.length === 0) {
      return "El carrito está vacío";
    } else {
      return carritoID.productos;
    }
  }
  async deleteProductoCarrito(ident, productoID) {
    const listarCarrito = await this.listarCarrito();
    if (!listarCarrito[ident - 1]) return "No existe el carrito";
    //Si existe, seguí

    const c = listarCarrito[ident - 1].productos.find(
      (c) => c.id === parseInt(productoID)
    );
    const resultadoBusqueda = listarCarrito[ident - 1].productos.indexOf(c);
    if (resultadoBusqueda === -1) {
      return `No existe el producto con el id: ${productoID} en el carrito.`;
    } else {
      listarCarrito[ident - 1].productos.splice(resultadoBusqueda, 1);
      await fs.writeFile(this.ruta, JSON.stringify(listarCarrito, null, 2));
      return `El producto seleccionado fue borrado del carrito con el id: ${ident}`;
    }
  }
}
