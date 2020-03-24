const porta = 3003;
const express = require("express");
const bancoDeDados = require("./bancoDeDados");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); //para aceitar dados de vindos de formularios!!!  x-www-form-urlencoded

app.get("/produtos", (req, res) => {
  res.send(bancoDeDados.getProdutos()); //converte para JSON
});

app.get("/produtos/:id", (req, res) => {
  res.send(bancoDeDados.getProduto(req.params.id));
});

app.post("/produtos", (req, res) => {
  const { nome, preco } = req.body;
  const novoProduto = bancoDeDados.salvarProduto({ nome, preco });
  res.send(novoProduto); //converte pra JSON
});

app.delete("/produtos/:id", (req, res) => {
  bancoDeDados.deletarProduto(req.params.id);
  res.status(204).send();
});

app.put("/produtos/:id", (req, res) => {
  const { nome, preco } = req.body;
  const produtoEditado = bancoDeDados.salvarProduto({
    nome,
    preco,
    id: req.params.id
  });
  res.json({ produtoEditado });
});

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`);
});
