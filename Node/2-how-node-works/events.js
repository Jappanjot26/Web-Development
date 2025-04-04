const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}
const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

// multiple listeners allowed
myEmitter.on("newSale", () => {
  console.log("Customer name jonas");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stock.`);
});

myEmitter.emit("newSale", 9); // emit is like clicking btn

/////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request Recieved");
  res.end("Request Recieved");
}); // listening

server.on("request", (req, res) => {
  console.log("Another Request Recieved");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests....");
});
