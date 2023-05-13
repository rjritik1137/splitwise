import express from "express";
import { SignUp } from "./handlers/SignUp.js";

const app = express();
app.use(express.json());

app.post("/signUp", SignUp);

app.get("/pendingSpends", (req, res) => {
  res.send({
    h: 2,
  });
});

app.post("/expense/create", (req, res) => {
  console.log(req.body);
  const { splits, mode, payer } = req.body;

  res.send({
    h: 2,
  });
});

app.listen(3000, () => {
  console.log("Listenering to 3000");
});
