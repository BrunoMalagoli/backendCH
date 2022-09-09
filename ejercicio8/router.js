const express = require("express");
const router = express.Router();
const CRUD = require("./crud");
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
const actions = new CRUD("/productos.txt");
actions.setProducts();
router.get("/", async (req, res) => {
  try {
    let allProds = await actions.getAllProducts();
    res.send(allProds);
  } catch (error) {
    if (!allProds) {
      res.json({ error: "Productos no encontrados" });
    }
    console.log(error.message);
  }
});
router.get("/:id", async (req, res) => {
  try {
    let id = parseInt(req.params.id);
    let prodById = await actions.getProductById(id);
    res.send(prodById);
  } catch (error) {
    if (!prodById) {
      res.json({ error: "Productos no encontrados" });
    }
    console.log(error);
  }
});
router.post("/", async (req, res) => {
  try {
    let { title, price, image } = req.body;
    console.log(req.body);
    let id = await actions.postProduct(title, price, image);
    res.json({ id });
  } catch (error) {
    console.log(error.message);
  }
});
module.exports = router;
