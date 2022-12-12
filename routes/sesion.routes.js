const sesion = express.Router();
import passport from "passport";
import express from "express";

import { logoutSesion } from "../services/operaciones.services.js";
import { rSesion } from "../controllers/sesionUsers.js";
import { auth } from "../utils/passport/passport.js";

sesion.get("/", rSesion.viewIndex);
sesion.get("/register", rSesion.viewRegister);
sesion.get("/profile", auth, rSesion.profile);

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
sesion.post("/carrito/:id/buy", rSesion.buy);
sesion.get("/carrito/:id", rSesion.carrito);
sesion.get("/logout", logoutSesion);

export default sesion;
