const express = require("express");
const app = express();
require("dotenv").config({ path: "config/.env" });
const PORT = process.env.PORT;
const cors = require("cors");
const db = require("./config/db");

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

//Listen Port
app.listen(PORT || 4000, console.log(`The app is running on port ${PORT}`));
