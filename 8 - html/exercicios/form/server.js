const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//transforma o padrao url enconded em objeto
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/usuarios", (req, res) => {
  console.log(req.body);

  return res.send("<h1>Parabéns, usuário cadastrado");
});

app.post("/usuarios/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params.is);

  return res.send("<h1>Parabéns, usuário alterado");
});

app.listen(3333, () => {
  console.log("server executando na porta 3333");
});
