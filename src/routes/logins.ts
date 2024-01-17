import { FastifyInstance } from "fastify";
import { z } from "zod";
import { knex } from "../database";
import { randomUUID } from "node:crypto";

export async function loginRoutes(app: FastifyInstance) {
  app.post("/", async (request, response) => {
    const createLoginBodySchema = z.object({
      title: z.string(),
      user: z.string(),
      pass: z.string(),
    });

    const { title, user, pass } = createLoginBodySchema.parse(request.body);

    await knex("logins").insert({
      id: randomUUID(),
      title,
      user,
      pass,
    });

    return response.status(201).send("Sucesso");
  });
}
