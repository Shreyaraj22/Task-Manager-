import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

const REMOTE = "https://btproject-production.up.railway.app";
let localUsers = [];
let nextId = 10000;

// GET users
app.get("/api/users/", async (req, res) => {
  try {
    const remote = await fetch(`${REMOTE}/users/`);
    const remoteJson = remote.ok ? await remote.json() : [];
    res.json([...remoteJson, ...localUsers]);
  } catch (err) {
    res.status(502).json({ detail: "Failed to fetch remote users" });
  }
});

// POST user
app.post("/api/users/", (req, res) => {
  const { name, email, age } = req.body;
  const newUser = { id: nextId++, name, email, age };
  localUsers.push(newUser);
  res.status(201).json(newUser);
});

// DELETE user
app.delete("/api/users/:id/", (req, res) => {
  const id = Number(req.params.id);
  localUsers = localUsers.filter((u) => u.id !== id);
  res.status(204).send();
});

app.listen(4000, () => console.log("Proxy running at http://localhost:4000"));
