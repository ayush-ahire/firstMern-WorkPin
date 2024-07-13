require("dotenv").config();
const express = require("express");
const workRoutes = require("./routes/works");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");
// express app created
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, res.method);
  next();
});
// routes
app.use("/api/work", workRoutes);

// build connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // request for listening on port 4000
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port 4000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
