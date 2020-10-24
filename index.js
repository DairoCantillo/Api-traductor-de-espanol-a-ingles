var express = require("express");
var app = express();
const translate = require("@vitalets/google-translate-api");

app.get("/espanolIngles", function (req, res) {
  translate("I spea Dutch!", { from: "en", to: "nl" })
    .then((respuesta) => {
      res.send("ok");
    })
    .catch((err) => {
      console.error(err);
    });
});

app.listen(3000, function () {
  console.log("Aplicación ejemplo, escuchando el puerto 3000!");
});
