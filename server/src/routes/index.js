const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo à API de chat em tempo real!' });
});

module.exports = router;
