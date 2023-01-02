import axios from "axios";

const url = "http://localhost:8080/api/productos";

const datos = {
  nuevoproducto: {
    nombre: "Arroz Gallo Oro",
    descri: "No se pasa ni se pega",
    timeday: "1/1/2023, 14:16:38",
    codigo: "C5NXC",
    precio: 10,
    foto: "https://www.multifood.com.ar/images/000Z-001-002-02836504Z-001-002-028-Arroz-Gallo-Orobolsa.jpg",
    stock: 10,
  },
  productoEditado: {
    nombre: "Arroz",
    descri: "No se pasa ni se pega",
    timeday: "1/1/2023, 14:16:38",
    codigo: "C5NXC",
    precio: 50,
    foto: "https://www.multifood.com.ar/images/000Z-001-002-02836504Z-001-002-028-Arroz-Gallo-Orobolsa.jpg",
    stock: 15,
  },
  id: "63b2313d2b38c3a5bbc4bbf7",
};

async function listar() {
  const res = await axios.get(url);
  return console.log(res.data);
}

async function listarID(id) {
  const res = await axios.get(url + `${id}`);
  return console.log(res.data);
}

async function agregar(producto) {
  const res = await axios.post(url, producto);
  return console.log(res.data);
}

async function editar(producto, id) {
  const res = await axios.put(url + `/${id}`, producto);
  return console.log(res.data);
}

async function eliminar(producto, id) {
  const res = await axios.delete(url + `/${id}`, producto);
  return console.log(res.data);
}

/* carrito */

const urlCarrito = "http://localhost:8080/api/carrito";

async function listarCarrito() {
  const res = await axios.get(urlCarrito);
  return console.log(res.data);
}

async function crearCarrito() {
  const res = await axios.post(urlCarrito);
  return console.log(res.data);
}

async function eliminarCarrito(id) {
  const res = await axios.delete(urlCarrito + `/${id}`);
  return console.log(res.data);
}
