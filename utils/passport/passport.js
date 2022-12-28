import { user } from "../../src/model/modelUsuario.js";
import * as passLocal from "passport-local";
import passport from "passport";

import { newUserEmail } from "../node/nodemailer.js";
import { logger } from "../log/logger.js";

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
        let userEmail = await user.findOne({ email });
        if (userEmail) return done(null, false);

        const usuario = await user.create({
          name: req.body.nombre,
          password,
          email,
          address: req.body.address,
          phone: req.body.phone,
          image: `/image/${req.file.filename}`,
        });

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
        const usuario = await user.findOne({ email });
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
  const data = await user.findById(id);
  done(null, data);
});

export function auth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}
