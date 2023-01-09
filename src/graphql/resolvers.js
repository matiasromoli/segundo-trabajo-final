import { DaoFactoryProducto } from "../classes/DAOFactoryProducto.js";
import { DaoFactoryCarrito } from "../classes/DAOFactoryCarrito.js";
import { DTOCarrito } from "../dto/DTOService.js";

const DAOCarrito = DaoFactoryCarrito.get();
const DAO = DaoFactoryProducto.get();

export const resolverProducto = {
  Query: {
    list: async () => {
      return await DAO.listarProducto();
    },
    listCarrito: async () => {
      return await DAOCarrito.listarCarrito();
    },
  },
  Mutation: {
    crearProducto: async (_, { input }) => {
      return await DAO.agregarNuevoProducto(input);
    },
    eliminarProducto: async (_, { _id }) => {
      return await DAO.eliminarProducto(_id);
    },
    editarProducto: async (_, { _id, input }) => {
      return await DAO.editarProducto(_id, input);
    },
    listID: async (_, { _id }) => {
      return await DAO.listarProductoIdent(_id);
    },
    crearCarrito: async () => {
      return await DAOCarrito.crearCarrito();
    },
    eliminarCarrito: async (_, { _id }) => {
      const id = new DTOCarrito(_id, "");
      return await DAOCarrito.deleteCarrito(id);
    },
    agregarProducto: async (_, { _id, ident }) => {
      const data = new DTOCarrito(_id, ident);
      return await DAOCarrito.agregarProductoCarrito(data);
    },
    mostrarProducto: async (_, { _id }) => {
      const data = new DTOCarrito(_id, "");
      const carrito = await DAOCarrito.mostrarProductoCarrito(data);

      return carrito.producto;
    },
    eliminarProductoCarrito: async (_, { _id, ident }) => {
      const data = new DTOCarrito(_id, ident);
      return await DAOCarrito.deleteProductoCarrito(data);
    },
  },
};
