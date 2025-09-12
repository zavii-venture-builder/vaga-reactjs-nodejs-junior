import Fastify from 'fastify';
import cors from '@fastify/cors';
import productRoutes from './src/routes/productRoutes.js';

const fastify = Fastify({
  logger: true
});

// Registrar CORS
await fastify.register(cors, {
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], // Vite dev server
  methods: ['GET', 'POST', 'PUT', 'DELETE']
});

// Registrar rotas
await fastify.register(productRoutes, { prefix: '/api' });

// Rota de health check
fastify.get('/health', async (request, reply) => {
  return { status: 'OK', message: 'Servidor funcionando!' };
});

// Iniciar servidor
const start = async () => {
  try {
    const port = process.env.PORT || 3000;
    await fastify.listen({ port, host: '0.0.0.0' });
    console.log(`🚀 Servidor rodando na porta ${port}`);
    console.log(`📋 API disponível em: http://localhost:${port}/api`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();