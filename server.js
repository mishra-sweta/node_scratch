const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/aboutSweta") {
    res.end(
      "Sweta is very anxious right now, she very well knows that too coffee makes her anxiety worse but she won't stop chugging it. I wish she could do something to make herself feel that everything's gonna be okay be somehow it seems impossible at the moment"
    );
  }
  res.end("Hello Everyone! How to do I fix my life?");
});

server.listen(1622);
