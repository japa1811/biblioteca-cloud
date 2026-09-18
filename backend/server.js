require('dotenv').config();

const express = require('express');
const cors = require('cors');
const conectarBanco = require('./config/db');
const livrosRoutes = require('./routes/livrosRoutes');

const app = express();

app.use(cors());
app.use(express.json());

conectarBanco();

app.get('/api/status', (req, res) => {
  res.status(200).json({
    status: 'online',
    mensagem: 'Servidor funcionando'
  });
});

app.use('/api/livros', livrosRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Servidor rodando na porta ' + PORT);
});