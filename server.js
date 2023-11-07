// importo la libreria http necessaria per creare un server
// Libreria esiste già nativamente in Node
const http = require("http");

// importo la libreria dotenv
const dotenv = require("dotenv");

// la avvio
dotenv.config();

// require("dotenv").config();

// Di default usiamo la 3000
// Siccome la 3000 potrebbe essere in uso da altri programmi
// prevediamo la possibilità di passare la porta come variabile d'ambiente
/**
 * @type {number}
 */
let port = +process.env.PORT || 3000;


/**
 * 
 * @param {*} res 
 * @param {*} content 
 */
function htmlResponse(res, content) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(content);
}

/**
 * Restituisce una risposta in formato JSON
 * 
 * @param {http.ServerResponse} res 
 * @param {any} content 
 */
function jsonResponse(res, content) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify(content)
  );
}

/**
 * Creo il server
 * la callback function verrà invocata ogni volta che arriva una richiesta
 * sulla porta specificata
 * 
 * @param {http.ClientRequest} req
 * @param {http.ServerResponse} res
 */
const server = http.createServer(function (req, res) {
  // Devo specificare come il server deve rispondere
  // Invio dati in formato HTML
  htmlResponse(res, "<h1>Hello World</h1>");

  // Invio dati in formato JSON
  jsonResponse(res, { message: "Hello World" });
});

// avvio il server
server.listen(port, function () {
  console.log("Server is running on http://localhost:" + port);
});
/* 
server.on("error", function (error) {
  server.close();
  server.listen(port + 1, function () {
  // console.error("Error starting server", error);
  });
}) */
