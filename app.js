const express = require('express');
const bodyParser = require('body-parser');
const xmlrpc = require('xmlrpc');
const app = express();

app.set('view engine', 'ejs'); // para renderizar HTML com dados com EJS
app.use(bodyParser.urlencoded({ extended: true }));

const client = xmlrpc.createClient({ host: 'localhost', port: 9090, path: '/' });

// page inicial com o formulário
app.get('/', (req, res) => {
  res.render('index', { weather: null, error: null });
});

// a enviar o formulário
app.post('/previsao', (req, res) => {
  const cidade = req.body.cidade;

  client.methodCall('getWeather', [cidade], (error, value) => {
    if (error) {
      res.render('index', { weather: null, error: 'Erro ao buscar previsão.' });
    } else {
      res.render('index', { weather: value, error: null });
    }
  });
});

app.listen(3000, () => {
  console.log('App rodando em http://localhost:3000');
});
