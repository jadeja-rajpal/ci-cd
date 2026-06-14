const express = require("express");
const cors = require("cors");
const API_KEY = "123456789SECRETKEY";
const app = express();

app.use(cors());

app.get("/api/message", (req, res) => {
  res.json({
    status: "success",
    message: "Hello from Dockerized Backend 🚀"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
