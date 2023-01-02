import { sessionService } from "../services/sesion.service.js";
import { newBuyEmail } from "../utils/node/nodemailer.js";
import { sendMessage } from "../utils/twilio/message.js";

const sessionApp = new sessionService();

export const rSesion = {
  viewIndex: (req, res) => {
    res.render("home", {
      title: "Login",
    });
  },
  viewRegister: (req, res) => {
    res.render("index", {
      title: "Register",
    });
  },
  profile: async (req, res) => {
    try {
      const datosUsuario = req.session.passport.user;

      const data = await sessionApp.usuario(datosUsuario);
      const productos = await sessionApp.listarProducto();
      const carritos = await sessionApp.listar();

      res.render("Profile/profile", {
        user: data,
        productos,
        carritos,
      });
    } catch (error) {
      res.status(400).json(error);
    }
  },
  logout: (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
      next();
    });
  },
  carrito: async (req, res) => {
    try {
      const productoCarrito = await sessionApp.listarProductoCarrito(
        req.params.id
      );
      const ident = req.params.id;

      res.render("models/carrito", {
        productoCarrito,
        ident,
      });
    } catch (error) {
      res.status(400).json(error);
    }
  },
  buy: async (req, res) => {
    try {
      newBuyEmail(req.body);
      sendMessage(req.body);
      res.send("Compra realizada con exito");
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
