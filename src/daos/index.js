let data = "default";
let productosDao;
let carritoDao;

switch (data) {
  case "json":
    const { default: ProductoDaoArchivo } = await import(
      "../daos/producto/ProductoDaoArchivo.js"
    );
    const { default: CarritoDaoArchivo } = await import(
      "../daos/carrito/CarritoDaoArchivo.js"
    );
    productosDao = new ProductoDaoArchivo();
    carritoDao = new CarritoDaoArchivo();
    break;
  case "mongo":
    const { default: ProductoDaoMongoDb } = await import(
      "../daos/producto/ProductoDaoMongo.js"
    );
    const { default: CarritoDaoMongoDb } = await import(
      "../daos/carrito/CarritoDaoMongo.js"
    );
    productosDao = new ProductoDaoMongoDb();
    carritoDao = new CarritoDaoMongoDb();
    break;
  case "firebase":
    const { default: ProductoDaoFirebase } = await import(
      "../daos/producto/ProductoDaoFirebase.js"
    );
    const { default: CarritoDaoFirebase } = await import(
      "../daos/carrito/CarritoDaoFirebase.js"
    );
    productosDao = new ProductoDaoFirebase();
    carritoDao = new CarritoDaoFirebase();
    break;
  case "default":
    const { default: memoriaProducto } = await import(
      "../daos/producto/ProductoDaoMemoria.js"
    );
    const { default: memoriaCarrito } = await import(
      "../daos/carrito/CarritoDaoMemoria.js"
    );
    productosDao = new memoriaProducto();
    carritoDao = new memoriaCarrito();
    break;
}

export { productosDao, carritoDao };
