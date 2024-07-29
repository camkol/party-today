const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Hello I am at the party");
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  //if ticket is within range then send 200
  // res.write("sucessful response");
  //else send him a 404

  console.log("server response");
});

server.listen(3000, () => {
  console.log("Created server, congrats");
});
