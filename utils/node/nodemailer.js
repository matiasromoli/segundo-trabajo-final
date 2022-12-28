import { createTransport } from "nodemailer";
import pkv from "dotenv";
pkv.config();

export async function newUserEmail(user) {
  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODE_EMAIL,
      pass: process.env.NODE_KEY,
    },
  });

  const mailOptions = {
    from: "¡Nuevo usuario registrado!",
    to: process.env.NODE_EMAIL,
    subject: "Nuevo registro",
    html: `<div>
    <h2> El usuario registrado es: </h2>
    ${user}
    </div>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(info);
  } catch (error) {
    console.log(error);
  }
}

export async function newBuyEmail(products) {
  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODE_EMAIL,
      pass: process.env.NODE_KEY,
    },
  });

  const productos = JSON.stringify(products);

  const mailOptions = {
    from: "¡Nueva compra registrada!",
    to: process.env.NODE_EMAIL,
    subject: "Nueva compra",
    html: `<div>
    <h2> La compra realizada es la siguiente: </h2>
    ${productos}
    </div>`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
}
