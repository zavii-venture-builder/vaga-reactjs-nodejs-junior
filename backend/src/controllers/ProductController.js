import { Product } from '../models/Product.js';

let products = [];
let nextId = 1;

export class ProductController {
  // Lista de todos os produtos
  static async getAll(request, reply) {
    try {
      return {
        success: true,
        data: products,
        total: products.length
      };
    } catch (error) {
      reply.code(500).send({
        success: false,
        message: 'Erro interno do servidor',
        error: error.message
      });
    }
  }

  // Busca produto por ID
  static async getById(request, reply) {
    try {
      const { id } = request.params;
      const product = products.find(p => p.id === parseInt(id));

      if (!product) {
        return reply.code(404).send({
          success: false,
          message: 'Produto não encontrado'
        });
      }

      return {
        success: true,
        data: product
      };
    } catch (error) {
      reply.code(500).send({
        success: false,
        message: 'Erro interno do servidor',
        error: error.message
      });
    }
  }

  // Criação de um novo produto
  static async create(request, reply) {
    try {
      const { name, price, quantity } = request.body;

      // Validação dos dados
      const errors = Product.validate({ name, price, quantity });
      if (errors.length > 0) {
        return reply.code(400).send({
          success: false,
          message: 'Dados inválidos',
          errors
        });
      }

      // Verifica se já existe
      const existingProduct = products.find(p => 
        p.name.toLowerCase() === name.toLowerCase()
      );

      if (existingProduct) {
        return reply.code(409).send({
          success: false,
          message: 'Produto com este nome já existe'
        });
      }

      // Criação
      const newProduct = new Product(nextId++, name.trim(), price, quantity);
      products.push(newProduct);

      reply.code(201).send({
        success: true,
        message: 'Produto criado com sucesso',
        data: newProduct
      });
    } catch (error) {
      reply.code(500).send({
        success: false,
        message: 'Erro interno do servidor',
        error: error.message
      });
    }
  }

  // Atualização / Update
  static async update(request, reply) {
    try {
      const { id } = request.params;
      const { name, price, quantity } = request.body;

      const productIndex = products.findIndex(p => p.id === parseInt(id));
      
      if (productIndex === -1) {
        return reply.code(404).send({
          success: false,
          message: 'Produto não encontrado'
        });
      }

      // Validação dos dados
      const errors = Product.validate({ name, price, quantity });
      if (errors.length > 0) {
        return reply.code(400).send({
          success: false,
          message: 'Dados inválidos',
          errors
        });
      }

      // Atualização
      products[productIndex] = {
        ...products[productIndex],
        name: name.trim(),
        price: parseFloat(price),
        quantity: parseInt(quantity),
        updatedAt: new Date().toISOString()
      };

      return {
        success: true,
        message: 'Produto atualizado com sucesso',
        data: products[productIndex]
      };
    } catch (error) {
      reply.code(500).send({
        success: false,
        message: 'Erro interno do servidor',
        error: error.message
      });
    }
  }

  // Deletar / Delete
  static async delete(request, reply) {
    try {
      const { id } = request.params;
      const productIndex = products.findIndex(p => p.id === parseInt(id));

      if (productIndex === -1) {
        return reply.code(404).send({
          success: false,
          message: 'Produto não encontrado'
        });
      }

      const deletedProduct = products.splice(productIndex, 1)[0];

      return {
        success: true,
        message: 'Produto deletado com sucesso',
        data: deletedProduct
      };
    } catch (error) {
      reply.code(500).send({
        success: false,
        message: 'Erro interno do servidor',
        error: error.message
      });
    }
  }
}