# 🌤️ Serviço de Previsão do Tempo via XML-RPC

Este projeto simula uma empresa que deseja oferecer um serviço de previsão do tempo em seu site, **utilizando XML-RPC para se conectar a um serviço externo** que fornece informações meteorológicas em tempo real (OpenWeatherMap).

---

## 📋 Descrição do Projeto

A empresa, sem infraestrutura própria para dados meteorológicos, implementa um **cliente XML-RPC em Node.js** que se comunica com um servidor que consulta dados reais da API pública do [OpenWeatherMap](https://openweathermap.org/).

Quando um usuário requisita a previsão do tempo para uma cidade, o servidor XML-RPC consulta a API do provedor e retorna dados como:

- Nome da cidade
- Temperatura
- Umidade
- Condição do tempo
- Probabilidade de chuva

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- XML-RPC (`xmlrpc`)
- Axios (`axios`)
- API OpenWeatherMap (gratuita)

---

## 🚀 Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
