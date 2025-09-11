import { products } from "../data/products.js";

export default async function productRoutes(fastify) {
  fastify.get("/", async () => {
    return products;
  });

  fastify.post("/", async (request, reply) => {
    const { name, price, quantity } = request.body;

    if (!name || !price || !quantity) {
      return reply.code(400).send({ error: "Todos os campos são obrigatórios" });
    }

    const newProduct = {
      id: products.length + 1,
      name,
      price: Number(price),
      quantity: Number(quantity),
    };

    products.push(newProduct);
    return reply.code(201).send(newProduct);
  });
}
