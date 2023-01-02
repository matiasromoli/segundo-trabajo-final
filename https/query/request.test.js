import { strict as assert } from "assert";
import supertest from "supertest";
import { expect } from "chai";

let request = supertest("http://localhost:8080/api");
const nuevoproducto = {
  nombre: "Arroz Gallo Oro",
  descri: "No se pasa ni se pega",
  timeday: "1/1/2023, 14:16:38",
  codigo: "C5NXC",
  precio: 10,
  foto: "https://www.multifood.com.ar/images/000Z-001-002-02836504Z-001-002-028-Arroz-Gallo-Orobolsa.jpg",
  stock: 10,
};
const productoEditado = {
  nombre: "Arroz",
  descri: "No se pasa ni se pega",
  timeday: "1/1/2023, 14:16:38",
  codigo: "C5NXC",
  precio: 50,
  foto: "https://www.multifood.com.ar/images/000Z-001-002-02836504Z-001-002-028-Arroz-Gallo-Orobolsa.jpg",
  stock: 15,
};

describe("Comprobando listar los productos", function () {
  it("Deberia devolver un status 200", async function () {
    const response = await request.get("/productos");
    expect(response.status).to.eql(200);
  });
  it("Deberia devolver un JSON", async function () {
    const response = await request.get("/productos");
    expect("Content-Type", /json/);
  });
});

describe("Comprobando listar producto por ID", function () {
  it("Deberia devolver un status 200", async function () {
    const id = "63b2313d2b38c3a5bbc4bbf7";

    const response = await request.get(`/productos/${id}`);
    expect(response.status).to.eql(200);
  });

  it("Deberia devolver un JSON", async function () {
    const id = "63b2313d2b38c3a5bbc4bbf7";

    await request.get(`/productos/${id}`);
    expect("Content-Type", /json/);
  });
});

describe("Comprobar agregar un nuevo producto", function () {
  it("Deberia agregar un nuevo producto", async function () {
    const response = await request.post("/productos").send(nuevoproducto);
  });

  it("Deberia devolver un status 200", async function () {
    const response = await request.post("/productos");
    expect(response.status).to.eql(200);
  });

  it("Deberia devolver un JSON", async function () {
    await request.post("/productos");
    expect("Content-Type", /json/);
  });
});

describe("Comprobar editar un nuevo producto", function () {
  it("Deberia editar el producto elegido", async function () {
    const id = "63b2313d2b38c3a5bbc4bbf7";

    const response = await request
      .put(`/productos/${id}`)
      .send(productoEditado);
  });

  it("Deberia devolver un status 200", async function () {
    const id = "63b2313d2b38c3a5bbc4bbf7";

    const response = await request
      .put(`/productos/${id}`)
      .send(productoEditado);
    expect(response.status).to.eql(200);
  });

  it("Deberia devolver un JSON", async function () {
    const id = "63b2313d2b38c3a5bbc4bbf7";

    await request.put(`/productos/${id}`).send(productoEditado);
    expect("Content-Type", /json/);
  });
});

describe("Comprobar eliminar un nuevo producto", function () {
  it("Deberia eliminar el producto elegido, status 200", async function () {
    const id = "63b2313d2b38c3a5bbc4bbf7";

    const response = await request.delete(`/productos/${id}`);
    expect(response.status).to.eql(200);
  });
});
