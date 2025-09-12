import Fastify from 'fastify';
import cors from '@fastify/cors';
import produtoRoutes from './routes/produtoRoutes.js';

const fastify = Fastify({
    logger:true
});

// Configuração do CORS
await fastify.register(cors, {
    origin: '*', // Permite que o Vite acesse a API
    methods: ['GET', 'POST', 'PUT', 'DELETE']
});

// Registro das rotas
await fastify.register(produtoRoutes, { prefix: '/api' });

// Rota de Health Check
fastify.get('/health', async (request, reply) => {
    return { status: 'OK', message: 'Servidor Funcionando!' };
});

// Inicializa o servidor
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