const http = require("http");

// anytime an incoming request comes in this callback function will be responsible to assemble a response and send that response back to the client

// we can use "req"uest to get infromation about the incoming http request
// we can use "res"ponse to set infromation on the outgoing http request
const server = http.createServer((req, res) => {
  // assume succesfull message
  res.statusCode = 200;

  // next tell the client what kind of data this is
  res.setHeader("Content-Type", "text/html");

  // now I want to send back some data back of some sort upon a succesfull status
  res.write("<h1>Hello, World!!</h1>");

  // finally terminate the response and send it off into the internet
  res.end();
});

// Now to get this sever running, I have to tell this server to listen on a specific port
server.listen(8080, () => {
  console.log(`Server Successfully Starter on Port 8080!!`);
});
