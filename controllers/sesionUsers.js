import { productosDao as productoApp } from "../src/daos/index.js";
import { user } from "../src/container/db/schema.js";

export const cSesion = {
  viewIndex: (req, res) => {
    res.render("home", {
      title: "login",
    });
  },
  viewRegister: (req, res) => {
    res.render("index", {
      title: "register",
    });
  },
  profile: async (req, res) => {
    /* user */
    const datosUsuario = req.session.passport.user;
    const data = await user.findById(datosUsuario);

    /* productos */
    const productos = await productoApp.listarProducto();

    res.render("Profile/profile", {
      user: data,
      products: productos,
    });
  },
  logout: (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  },
  carrito: async (req, res) => {
    res.render("models/carrito");
  },
};
