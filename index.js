var express = require("express");
var app = express();
const translate = require("@vitalets/google-translate-api");
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send({
    repo: "https://github.com/DairoCantillo/Api-traductor-de-espanol-a-ingles",
    version: "1.0",
  });
});

app.post("/espanolIngles", (req, res) => {
  let data = { texto: "" };
  translate(req.query.texto, { from: "es", to: "en" })
    .then((respuesta) => {
      data.texto = respuesta.text;
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post("/inglesEspanol", (req, res) => {
  let data = { texto: "" };
  translate(req.query.texto, { from: "en", to: "es" })
    .then((respuesta) => {
      data.texto = respuesta.text;
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(port);
