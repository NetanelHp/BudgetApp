const express = require("express");
const app = express();
require("dotenv").config({ path: "config/.env" });
const cors = require("cors");
const db = require("./config/db");
const PORT = process.env.PORT || 4000;
const path = require("path");

//Router
const transRoutes = require("./routes/transactionsRoutes");
const userRoutes = require("./routes/userRoutes");

//configs
app.use(express.json());
app.use(cors());

//Connect to DB
db();

app.use("/api/transactions", transRoutes);
app.use("/api/user", userRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("front/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "front", "build", "index.html"));
});

//Listen Port
app.listen(PORT, console.log(`The app is running`));
