//------------- EJEMPLO CON EXPRESS y ES6 JS (modulos)
// Agregar al package.json el tipo: "type": "module"
// Solo require ejecutar: npm run dev

import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

import { fileURLToPath } from 'url'; // Importa la función fileURLToPath
import { dirname } from 'path'; // Importa la función dirname
const __filename = fileURLToPath(import.meta.url); // Obtiene la ruta del archivo actual
const __dirname = dirname(__filename); // Obtiene el directorio actual

const options = {
	cors: true,
	origin: ['http://localhost:3000']
}

const app = express();
const server = http.createServer(app);
const io = new Server(server, options);

app.use(express.static('cliente'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');

  socket.on('disconnect', () => {
    console.log('Un cliente se ha desconectado');
  });
  socket.on('mensaje', (variable) => {
    console.log(variable);
  });

	socket.emit('respuesta','Bienvenido cliente '+socket.id)
});

server.listen(3001, () => {
  console.log('Servidor escuchando en el puerto 3001');
});