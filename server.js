//------------- EJEMPLO CON EXPRESS y JS clasico
// Retirar del package.json el tipo: "type": "module"
// Solo requeire ejecutar: npm run dev
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);


app.use(express.static('cliente'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');

  // Manejar eventos personalizados aquí

  socket.on('disconnect', () => {
    console.log('Un cliente se ha desconectado');
  });

	socket.on('disconnect', () => {
    console.log('Un cliente se ha desconectado');
  });
  socket.on('mensaje', (variable) => {
    console.log(variable);
  });

});

server.listen(3001, () => {
  console.log('Servidor escuchando en el puerto 3000');
});