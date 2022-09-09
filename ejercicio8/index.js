const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const router = require("./router");
app.use("/api/productos", router);
app.listen(PORT, (req, res) => {
  console.log(`Servidor escuchando en ${PORT}`);
});
