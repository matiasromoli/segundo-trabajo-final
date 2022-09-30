import { memoriaProducto } from "../../container/memoria.js";
export let producto = [
  {
    id: 1,
    nombre: "Hola, soy el producto N°1",
    descri: "Lorem lorem lorem lorem",
    timeDay: "7/9/2022 21:28:30",
    codigo: "P001a2",
    precio: 220,
    foto: "url",
    stock: 10,
  },
  {
    id: 2,
    nombre: "Hola, soy el producto N°2",
    descri: "Lorem lorem lorem lorem",
    timeDay: "7/9/2022 21:28:30",
    codigo: "P001a2",
    precio: 220,
    foto: "url",
    stock: 10,
  },
];

class MemoriaDaoProducto extends memoriaProducto {
  constructor() {
    super(producto);
  }
}

export default MemoriaDaoProducto;
