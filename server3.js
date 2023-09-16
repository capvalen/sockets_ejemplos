//------------- EJEMPLO SIN EXPRESS y ES JS (modulos)
// Agregar al package.json el tipo: "type": "module"
import http from 'http';
import { Server } from 'socket.io';

const options = {
	cors: true,
	origin: ['http://localhost:3000']
}

// Crea un servidor HTTP básico
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Servidor Socket.IO sin Express</h1>');
});

// Crea una instancia de Socket.IO y la adjunta al servidor HTTP
const io = new Server(server, options);

io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado con id: '+socket.id);

  // Manejar eventos personalizados aquí

  socket.on('disconnect', () => {
    console.log('Un cliente se ha desconectado');
  });
	socket.on('mensaje', (variable) => {
    console.log(variable);
  });

	socket.emit('respuesta','Bienvenido cliente '+socket.id)
});

// Escucha en el puerto 3000
server.listen(3001, () => {
  console.log('Servidor escuchando en el puerto 3001');
});