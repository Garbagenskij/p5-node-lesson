// da github desktop > repository > open in Terminal > scrivi: node (nome file)
// in questo caso scrivo: node server.js, e se funziona compare "up and running" nel terminale
console.log("up and running");
// now type npm init and follow instruction, when at the end it ask to type yes do it and then here it will appear a new file: package.json
// now type npm install express, succedono cose, compaiono nuove righe  in package.json e pure node_modules
let express = require("express");
let app = express();
let port = 3000;
let server = app.listen(port);
console.log("server is running on http://localhost:" + port);
// to check if it works, everytime type node server.js
app.use(express.static("public"));
//control + c per bloccare i processi????
// di nuovo node.js
// referesha la pagina
let serverSocket = require("socket.io");
let io = serverSocket(server);
io.on("connection", newConnection);
function newConnection(newSocket) {
  console.log(newSocket.id);
}
