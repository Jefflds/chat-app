require('dotenv').config();

const express = require('express');
const app = express();

const index = require('./routes/index');

const IP = process.env.IP || '0.0.0.0'; 
const PORT = process.env.PORT || 3000;


app.use("/", index);

app.listen(PORT, IP, () => {
  console.log(`Servidor está rodando em http://${IP}:${PORT}`);
});
