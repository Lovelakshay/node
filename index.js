const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("🚀 Hello from Simple Node.js App!");
});

app.get("/health", (req, res) => {
  res.json({ status: "OK", app: "NodeJS" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
