
const express = require("express")
const app = express();
const route = require("./routes/routes");

app.use("/api/v1" , route);

app.listen(3000);