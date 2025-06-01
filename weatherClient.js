const xmlrpc = require('xmlrpc');

// Cria o cliente que se conecta ao servidor na porta 9090
const client = xmlrpc.createClient({ host: 'localhost', port: 9090, path: '/' });

// Função para obter previsão do tempo
function getWeather(city) {
  client.methodCall('getWeather', [city], function (error, value) {
    if (error) {
      console.error('Erro ao obter previsão:', error);
    } else {
      console.log(`Previsão do tempo para ${value.cidade}:`);
      console.log(`🌡️ Temperatura: ${value.temperatura}`);
      console.log(`💧 Umidade: ${value.umidade}`);
      console.log(`🌤️ Condição: ${value.condicao}`);
      console.log(`☔ Chance de Chuva: ${value.chanceDeChuva}`);
    }
  });
}

// Exemplo de uso
getWeather('São Paulo');
