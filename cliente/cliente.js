// Conectar al servidor Socket.IO
const socket = io("http://localhost:3001");

// Manejar eventos personalizados aquí

// Ejemplo: Enviar un mensaje al servidor
socket.emit('mensaje', '¡Hola, servidor!');

// Escuchar un evento del servidor
socket.on('respuesta', (data) => {
  console.log('Servidor dice:', data);
});