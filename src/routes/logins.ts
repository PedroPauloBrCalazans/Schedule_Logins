import { FastifyInstance } from "fastify";
import { z } from "zod";
import { knex } from "../database";
import { randomUUID } from "node:crypto";

export async function loginRoutes(app: FastifyInstance) {
  app.get("/", async () => {
    const logins = await knex("logins").select();

    return { logins };
  });

  app.get("/:id", async (request) => {
    const getLoginParamsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = getLoginParamsSchema.parse(request.params);

    const login = await knex("logins").where("id", id).first();

    return { login };
  });

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
