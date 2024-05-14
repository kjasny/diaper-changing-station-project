const express = require("express");
const app = express();
const cors = require('cors')
const path = require('path')
const {getAllChangingTablesController} = require('/controllers/controllers')

app.use(cors())
app.use(express.static("client/build"));

app.get("/changingtables", getAllChangingTablesController())

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
  
  app.listen(8080, () => {
    console.log("listening on http://localhost:8080");
  });