const http = require("http");

const hostname = "127.0.0.1";
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(`<!DOCTYPE html>
  <html>
      <head>
          <title>HTML Page on Local Node Server</title>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style type="text/css">
              body { text-align: center; padding: 10%; font: 20px Helvetica, sans-serif; color: #333; }
              h1 { font-size: 50px; margin: 0; }
              article { display: block; text-align: left; max-width: 650px; margin: 0 auto; }
              a { color: #dc8100; text-decoration: none; }
              a:hover { color: #333; text-decoration: none; }
              @media only screen and (max-width : 480px) {
                  h1 { font-size: 40px; }
              }
          </style>
      </head>
      <body>
          <article>
              <h1>HTML Page running in Node Local Server</h1>
              <p>Learning Nodejs</p>
              <p id="signature">&mdash; <a href="">[Himanshu]</a></p>
          </article>
      </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
