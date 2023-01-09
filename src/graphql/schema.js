import { makeExecutableSchema } from "graphql-tools";
import { resolverProducto} from "./resolvers.js";

export const typeDefs = `

    type Producto {
    _id: ID,
    nombre: String,
    descri: String,
    timeday: String,
    codigo: String,
    precio: Int,
    foto: String,
    stock: Int,
    }

    type Carrito {
        _id: ID
        producto: [Producto]
    }

    type Res {
        acknowledged: Boolean
        modifiedCount: Int
        upsertedId: Boolean
        upsertedCount: Int
        matchedCount: Int
    }

    type Query {
        listCarrito: [Carrito]
        list: [Producto]
    }   

    type Mutation {
        editarProducto(_id: ID, input: ProductoInput) : Producto
        crearProducto(input: ProductoInput): Producto
        eliminarProducto(_id: ID) : Producto
        listID(_id: ID) : Producto

        eliminarProductoCarrito(_id: ID, ident: ID) : Res
        agregarProducto(_id: ID, ident: ID) : Carrito
        mostrarProducto(_id: ID) : [Carrito]
        eliminarCarrito(_id: ID ) : Carrito
        crearCarrito: Carrito
 
    }

    input ProductoInput {
        nombre: String,
        descri: String,
        timeday: String,
        codigo: String,
        precio: Int,
        foto: String,
        stock: Int,
    }
`;


export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolverProducto,
});
