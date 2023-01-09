export class DTOProducto {
  nombre;
  descri;
  codigo;
  precio;
  stock;
  foto;

  constructor(data) {
    this.nombre = data.nombre;
    this.descri = data.descri;
    this.codigo = data.codigo;
    this.precio = data.precio;
    this.stock = data.stock;
    this.foto = data.foto;
  }
}
export class DTOCarrito {
  id;
  ident;
  constructor(id, ident) {
    this.id = id;
    this.ident = ident;
  }
}
export class DTOUser {
  user
  constructor(data) {
    this.user = data
    }
}
