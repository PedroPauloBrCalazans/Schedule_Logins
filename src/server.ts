import fastify from "fastify";

const app = fastify();

app.get("/hello", () => {
  return "Hello word";
});

app
  .listen({
    port: 7474,
  })
  .then(() => {
    console.log("HTTP Server Running!");
  });
