import { config } from "../../config/config.js";

const accountSid = config.twilio.sid;
const authToken = config.twilio.token;
import twilio from "twilio";

const client = twilio(accountSid, authToken);

export function sendMessage(compra) {
  client.messages
    .create({
      from: "whatsapp:+14155238886",
      body: `Se ha registrado una nueva compra: ${JSON.stringify(compra)}`,
      to: "whatsapp:+5492215438893",
    })
    .then((message) => console.log(message.sid));
}
