Bun.serve({
  port: 8000,
  fetch(req) {
    return new Response("Welcome to Bun!");
  },
});

console.log("Listning to port : 8000");
