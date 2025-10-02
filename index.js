import express from "express";
const app = express();
const PORT = process.env.PORT || 10000;

app.get("/", (_req, res) => res.send("✅ Server is running"));
app.listen(PORT, () => console.log(`HTTP listening on ${PORT}`));
