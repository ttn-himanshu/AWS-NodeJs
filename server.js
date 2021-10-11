const express = require("express");
const app = express();
const fs = require("fs");
const port = 3002;

app.get("/", (req, res) => {
  res.setHeader("cache-control", "max-age=3600");
  res.setHeader("x-frame-options", "SAMEORIGIN");
  res.setHeader("Strict-Transport-Security", "max-age=3600; includeSubDomains");
  res.writeHead(200, { "content-type": "text/html" });

  fs.createReadStream("index.html").pipe(res);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// cache control: max-age=3600
// Strict-Transport-Security: max-age=3600; includeSubDomains
// X-Frame-Options: SAMEORIGIN
// pragna: same as cache control
