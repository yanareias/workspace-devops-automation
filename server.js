const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Projeto DevOps Automation funcionando!'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

if (require.main === module) {
  app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
}

module.exports = app;