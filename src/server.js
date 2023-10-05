const hapi = require('@hapi/hapi');
const router = require('./router');

const init = async () => {
  const server = hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
        headers: ['Accept', 'Content-Type'],
        additionalHeaders: ['X-Requested-With'],

      }
    }
  });
  server.route(router);



  await server.start();
  console.log(`server ini berjalan di port ${server.info.uri}`);
};

init();