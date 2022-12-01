const sesion = express.Router();
import passport from "passport";
import express from "express";

import { cSesion } from "../controllers/sesionUsers.js";
import { auth } from "../utils/passport.js";

sesion.get("/", cSesion.viewIndex);

sesion.get("/register", cSesion.viewRegister);

sesion.get("/profile", auth, cSesion.profile);

sesion.post(
  "/register",
  passport.authenticate("signup", {
    successRedirect: "/",
    failureRedirect: "/register",
    passReqToCallback: true,
  })
);

sesion.post(
  "/login",
  passport.authenticate("signin", {
    successRedirect: "/profile",
    failureRedirect: "/",
  })
);

sesion.get("/carrito", cSesion.carrito);

sesion.get("/logout", cSesion.logout);

export default sesion;
