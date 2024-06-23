import * as io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');

export const useWebSocketConnection = () => {
  const call = () => {
    socket.emit('send_message', { message: 'yo' });

    socket.on('data_updated', (data) => {
      console.log(data);
    });
  };

  return { call };
};
