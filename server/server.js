require("dotenv").config();

const express = require("express");
const cors = require("cors");
const refreshRoutes = require("./routes/refreshRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", uploadRoutes);
app.use("/api", refreshRoutes);
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
