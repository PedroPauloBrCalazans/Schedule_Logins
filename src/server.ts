import fastify from "fastify";

import crypto from "node:crypto";
import { env } from "./env";
import { loginRoutes } from "./routes/logins";

const app = fastify();

app.register(loginRoutes, {
  prefix: "logins",
});

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP Server Running!");
  });
