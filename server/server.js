const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { PORT } = require("./config/server.config");
const authRoutes = require("./Routes/Auth.routes");
const UserRoutes = require("./Routes/User.routes");
const config = require("./config/db.config");
require("dotenv").config();

const app = express();
app.use(cors());

mongoose.connect(config.mongoURI).then(() => {
  console.log("connected to DB successfully");
});

app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", UserRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
