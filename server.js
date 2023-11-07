const http = require("http");

// importo la libreria dotenv
const dotenv = require("dotenv");

// la avvio
dotenv.config();

// require("dotenv").config();

const port = process.env.PORT || 3000;

// Creo il server
const server = http.createServer(function (req, res) {
  // Devo specificare come il server deve rispondere
  // res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<h1>Hello Classe #1 Node / React!</h1>
  PIN: ${process.env.PIN}<br>
  CVV: ${process.env.CVV}
  `);
})

// avvio il server
server.listen(port, function () {
    console.log("Server is running on port: " + port)
})