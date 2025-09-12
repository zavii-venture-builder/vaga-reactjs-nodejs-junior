import { ProductController } from '../controllers/ProductController.js';

async function productRoutes(fastify, options) {
  // Schema de validação do Fastify
  const productSchema = {
    type: 'object',
    required: ['name', 'price', 'quantity'],
    properties: {
      name: { type: 'string', minLength: 1 },
      price: { type: 'number', minimum: 0.01 },
      quantity: { type: 'integer', minimum: 0 }
    }
  };

  // GET /api/products - Listar ALL
  fastify.get('/products', ProductController.getAll);

  // GET /api/products/:id - Buscar por ID
  fastify.get('/products/:id', {
    schema: {
      params: {
        type: 'object',
        properties: {
          id: { type: 'string', pattern: '^[0-9]+$' }
        }
      }
    }
  }, ProductController.getById);

  // POST /api/products - Criar
  fastify.post('/products', {
    schema: {
      body: productSchema
    }
  }, ProductController.create);

  // PUT /api/products/:id - Atualizar
  fastify.put('/products/:id', {
    schema: {
      params: {
        type: 'object',
        properties: {
          id: { type: 'string', pattern: '^[0-9]+$' }
        }
      },
      body: productSchema
    }
  }, ProductController.update);

  // DELETE /api/products/:id - Deletar
  fastify.delete('/products/:id', {
    schema: {
      params: {
        type: 'object',
        properties: {
          id: { type: 'string', pattern: '^[0-9]+$' }
        }
      }
    }
  }, ProductController.delete);
}

export default productRoutes;