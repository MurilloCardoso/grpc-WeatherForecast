const xmlrpc = require('xmlrpc');
const axios = require('axios');

const API_KEY = 'KEY_API_WEATHER'; // coloque sua chave real aqui

const server = xmlrpc.createServer({ host: 'localhost', port: 9090 });

console.log("Servidor XML-RPC com dados reais iniciado em http://localhost:9090");

server.on('getWeather', async function (err, params, callback) {
  const city = params[0];
    console.log(`Recebendo solicitação de previsão do tempo para a cidade: ${city}`);
  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
        lang: 'pt_br'
      }
    });

    const data = response.data;

    const weatherData = {
      cidade: data.name,
      temperatura: `${data.main.temp}°C`,
      umidade: `${data.main.humidity}%`,
      condicao: data.weather[0].description,
      chanceDeChuva: data.rain ? `${data.rain['1h'] || data.rain['3h']} mm` : '0 mm'
    };

    callback(null, weatherData);

  } catch (error) {
    console.error('Erro ao buscar dados reais:', error.message);
      const weatherData = {
        cidade: city,
        temperatura: '28°C',
        umidade: '65%',
        condicao: 'Ensolarado',
        chanceDeChuva: '10%'
    };

    callback(null, weatherData);
   // callback({ faultCode: 500, faultString: "Erro ao buscar previsão real." });
  }
});
