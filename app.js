import productos from "./routes/productos.routes.js";
import carrito from "./routes/carrito.routes.js";
import sesion from "./routes/sesion.routes.js";
import { config } from "./config/config.js";
import express from "express";
const app = express();

import { URL } from "./utils/index.js";
const __dirname = URL(import.meta.url);
import path from "path";

import session from "express-session";
import passport from "passport";
import "./utils/passport.js";

import { logger } from "./utils/logger.js";

app.use(
  session({
    secret: config.passport.secret,
    cookie: { maxAge: 600000 },
    saveUninitialized: false,
    rolling: true,
    resave: true,
  })
);

app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import multer from "multer";

const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/image"),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

app.use(
  multer({
    storage,
    dest: path.join(__dirname, "public/image"),
  }).single("image")
);

app.use("/api/productos", productos);
app.use("/api/carrito", carrito);
app.use("/", sesion);

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.listen(process.env.PORT, () => {
  logger.info(`Servidor levantado con éxito: ${process.env.PORT}`);
});
