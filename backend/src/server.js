import Fastify from "fastify";
import cors from "@fastify/cors";
import productRoutes from "./routes/products.js";

const fastify = Fastify({ logger: true });

// Permitir requisições do frontend
await fastify.register(cors, { origin: "http://localhost:5173" });

fastify.register(productRoutes, { prefix: "/products" });

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: "0.0.0.0" });
    console.log("🚀 Backend rodando em http://localhost:3000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
