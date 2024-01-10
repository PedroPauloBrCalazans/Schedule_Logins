import fastify from "fastify";
import { knex } from "./database";
import crypto from "node:crypto";

const app = fastify();

app.get("/hello", async () => {
  const login = await knex("logins").select("*");

  return login;
});

app
  .listen({
    port: 7474,
  })
  .then(() => {
    console.log("HTTP Server Running!");
  });
