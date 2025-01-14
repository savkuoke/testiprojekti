const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');  // "tietokanta"
const middlewares = jsonServer.defaults();
/*
Tämä on kaikki, mitä tarvitset! 
Kun suoritat node server.js, 
json-server palvelee db.json-tiedostoa 
REST-rajapinnalla portissa 3000
*/

// Otetaan käyttöön oletusmiddlewaret (esim. logger, CORS, static, ym.)
server.use(middlewares);

// Reititetään kaikki pyynnöt db.json-tiedostolle
server.use(router);

// Käynnistetään palvelin
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
