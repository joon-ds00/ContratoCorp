const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

let contratos = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

// Criar contrato
app.post('/api/contratos', (req, res) => {
  const { titulo, conteudo, assinatura } = req.body;
  if (!titulo || !conteudo || !assinatura) return res.status(400).send("Dados incompletos.");
  contratos.push({ titulo, conteudo, assinatura });
  res.status(201).send("Contrato salvo.");
});

// Buscar contrato
app.get('/api/contratos', (req, res) => {
  const termo = req.query.titulo?.toLowerCase();
  const resultado = contratos.filter(c => c.titulo.toLowerCase().includes(termo));
  res.json(resultado);
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
