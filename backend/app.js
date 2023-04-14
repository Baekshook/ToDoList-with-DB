require("dotenv").config();

const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/user");

const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});
app.listen(port, () => {
  console.log(`Server listening on port : ${port} 🚀`);
});
