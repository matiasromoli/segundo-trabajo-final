import pvk from "dotenv";
pvk.config();

export const config = {
  mongodb: {
    uri: process.env.MONGO_URI,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  passport: {
    secret: process.env.SECRET_PASSPORT,
  },
  firebase: {
    url: {
      type: "service_account",
      project_id: "ecommerce-5a4c1",
      private_key_id: "e10ad37018b9169bfb2cfc7088bcc366f3cf06c0",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDGvOXcoHaMI0t3\n1lPN4VP/ub9zrW5t2I5evfDOPjosxOw4dpc6ehp4j7/dQhHefgxkVhQdv4lOyGIn\n4jQKZQ0rZggr+cj3ISvT0Nrd/gLDCT0H9XtzItlSRYF9qGRkG63mrIOQGDbbl77O\nI7Iv0Vyma6gUGmYZEm/EG7mOKb3tf4LerDMOzXkXjAa3Ebz4J2b9nRdt+TJz0kgb\noU5yuG0T00NA+jjG6mAXr50oBog5bfPFSXrWTf9KtE60pREGe0uOpzEMLXqh5wIf\nDmZHImJB9RQeEcpX9c2B7bN49JDQNzqIlZw/qblmwuMvxUS9I2cJSys8uU9Ac9Oc\nRFRr2PKXAgMBAAECggEAW51t62iPbafBnQNRC7ohkmQK5WUgYIPxkaxG65SVFdlL\nufW1XlA2jrhZrsJL4YDC7qgdyt7micpnMVKeQeJ2kTiOcNNLuNzySslfc/GqTUWf\nfGFGYPvCKiJ/gLFVYi6+WnXRimYXN+C6pWWgOVnut4suZuIKielNW56aSfZlJyuN\nRikBLH1Z3A0cNPWlErb+fsHex8p7zPkOoOeZoLhdIUGuTMlc0gl/kz07FRfHbBgS\nJgSchngNnkKVdJb1XF1gMEx5gdYeMB2L1UZk4HZO4ZmuUqF1BJ232kAgYn/5Nmd9\nC4oL5huADD2/+Rnb5c7BcnbSxKalq5vQ6lKVXXGZIQKBgQD6rklnhORwZtnR3yrO\nHLMRyGECekx0iwa9oZbIVItJtejMyjQsV1mt5xlErOb2Ngkj1GtJaRnz1alxXCaO\nUM6F+DXBnKH680EfgjO3FKZ0F5ek6H2ahTyDdLSeRiO4CrM3vq6/o982Y/zkdrwA\nXPLhvIm6fkJZR+aQt8Zf1PfPoQKBgQDK9HQ9R6JEm5sIfwhDfiFCmzUCo5jZa1Po\n7Hmd3vJJO/08SwKnsa+rmpKJy2YrAU0GW4kb/e+U5FqmcZxTSefcqxMuUEJkgnkg\nzDYTNUDe5q1oqj/ZDYukbDzRij5KN5GMQoKLG7R+/PH/H1BcTcMs3yw9V+jUm7LB\nunaG1+f3NwKBgQC6wcesGMR7vRRAGAvy3EzITcmAKA73sG/ILS+BdgMDWkPi9i3i\nbv0/4vDfShUTjvRGPkXjvip4j1CaRLXwxuDlzCJ4aLIAnOOCjuTqW7cavEzcrdyN\nlv+bTAIX/Fc2ELquKCBWY8ay5dENgCvV9Wl5pZXSW6ggjcGHRXLECIzKoQKBgAMS\ncC/9RZeEQ3R9d8KNxjMb5lGD6GxiE4MTEUQye7hgEBU5jXC8X8xZKp6rVYCRJHlU\nKV8jGN1IF5ctYRBhrgDJFiE9VcPvtaWpcagYxkKZe0Z6TT0b12FFwiXp0ceNz8Yv\nu4ofgTvq2D7kWnMLOkkTl7fV/NA7CxmjmOexnPFBAoGAY2/eY2siEYXypE71Tgoq\nYdVMAIG+cPQ2jYwVeRtNVm6UEtd3zfArLSU1CLJTArgdHHlBU0HXNKMnI656tBs6\nkI1CCNeUOJ1i0GWAA7p4ieKuPKCNLDcIEWl51iASrf4e7Ea988Sui/QPFQY+2c3p\nfVpiyRiOiisEYdGoo5IV+fw=\n-----END PRIVATE KEY-----\n",
      client_email:
        "firebase-adminsdk-gywtl@ecommerce-5a4c1.iam.gserviceaccount.com",
      client_id: "105223793809413361570",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url:
        "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-gywtl%40ecommerce-5a4c1.iam.gserviceaccount.com",
    },
  },
  twilio: {
    sid: process.env.TWILIO_SID,
    token: process.env.TWILIO_TOKEN,
  },
  env: process.env.LOGGER,
  modo: process.env.MODO,
};
