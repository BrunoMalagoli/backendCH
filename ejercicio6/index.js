const Contenedor = require("../ejercicio3");
const container = new Contenedor("productos.txt");
const express = require("express");
const app = express();
const port = 3000;
app.listen(3000, () => {
  console.log(`servidor escuchando en ${port}`);
});
app.get("/productos", async (req, res) => {
  const productos = JSON.parse(await container.getAll());
  console.log(productos);
  res.send(productos);
});
app.get("/productoRandom", async (req, res) => {
  let productos = JSON.parse(await container.getAll());
  let random = Math.floor(Math.random() * productos.length());
  let productoRandom = productos[random];
  console.log(productoRandom);
  res.send(productoRandom);
});
