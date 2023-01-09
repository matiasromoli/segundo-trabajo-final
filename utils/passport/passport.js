import * as passLocal from "passport-local";
import passport from "passport";

import { verifyEmail, createUser, deserialize } from "./index.js";
import { carritoApp } from "../../controllers/carrito.js";
import { newUserEmail } from "../node/nodemailer.js";
import { logger } from "../../config/logger.js";

passport.use(
  "signup",
  new passLocal.Strategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        let { nombre, address, phone } = req.body;

        const correo = await verifyEmail(email);
        if (correo) return done(null, false);

        const usuario = await createUser(
          nombre,
          password,
          email,
          address,
          phone,
          req.file.filename
        );
        await carritoApp.crearCarrito();
        newUserEmail(usuario);
        return done(null, usuario);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  "signin",
  new passLocal.Strategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const usuario = await verifyEmail(email);
        if (!usuario)
          return done(null, false, logger.error("El usuario no existe"));

        const validate = await usuario.isValidPassword(password);
        if (!validate) {
          return done(
            null,
            false,
            logger.error("Por favor, vuelva a introducir la contraseña")
          );
        }
        return done(null, usuario);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const data = await deserialize(id);
  done(null, data);
});

export function auth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}
