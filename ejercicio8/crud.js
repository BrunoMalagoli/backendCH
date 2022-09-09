const fs = require("fs");
const productos = [
  {
    title: "Remera Barcelona",
    price: 300,
    thumbnail:
      "https://www.ole.com.ar/futbol-internacional/espana/barcelona-nueva-camiseta-polemica-real_0_ITlVcOlnM3.html",
  },
  {
    title: "Remera AFA",
    price: 250,
    thumbnail:
      "https://www.ole.com.ar/futbol-internacional/espana/barcelona-nueva-camiseta-polemica-real_0_ITlVcOln",
  },
  {
    title: "Pantalon PSG",
    price: 200,
    thumbnail:
      "https://www.ole.com.ar/futbol-internacional/espana/barcelona-nueva-camiseta-polemica-real_0_ITlVcOln",
  },
];
let idCount = 0;
const CRUD = class CRUD {
  constructor(fileName) {
    this.fileName = fileName;
    this.productos = productos;
  }
  async setProducts() {
    try {
      let newProductsArray = [];
      this.productos.map((producto) => {
        idCount++;
        producto.id = idCount;
        newProductsArray.push(producto);
      });
      await fs.promises.writeFile(
        `${__dirname}/${this.fileName}`,
        JSON.stringify(newProductsArray)
      );
    } catch (error) {
      console.log(error);
    }
  }
  async getAllProducts() {
    try {
      const allProducts = await fs.promises.readFile(
        `${__dirname}/${this.fileName}`,
        "utf-8"
      );
      return allProducts;
    } catch (error) {
      console.log(error);
    }
  }
  async getProductById(id) {
    try {
      let allProducts = await fs.promises.readFile(
        `${__dirname}/${this.fileName}`,
        "utf-8"
      );
      allProducts = JSON.parse(allProducts);
      let filterById = allProducts.filter((products) => products.id === id);
      return filterById;
    } catch (error) {
      console.log(error);
    }
  }
  async postProduct(title, price, img) {
    try {
      let allProducts = await fs.promises.readFile(
        `${__dirname}/${this.fileName}`,
        "utf-8"
      );
      let id = idCount + 1;
      const prod = { title, price, img, id };
      allProducts = await JSON.parse(allProducts);
      await allProducts.push(prod);
      await fs.promises.writeFile(
        `${__dirname}/${this.fileName}`,
        JSON.stringify(allProducts)
      );
      return id;
    } catch (error) {
      console.log(error);
    }
  }
  async deleteAllProducts() {
    try {
      fs.promises.writeFile(`${__dirname}/${this.fileName}`, "[]");
    } catch (error) {
      console.log(error);
    }
  }
  async deleteById(id) {
    try {
      const allProds = await fs.promises.readFile(
        `${__dirname}/${this.fileName}`,
        "utf-8"
      );
      let newProds = allProds.filter((prods) => {
        return prods.id !== id;
      });
      await fs.promises.writeFile(`${__dirname}/${this.fileName}`, newProds);
    } catch (error) {
      console.log(error);
    }
  }
};
module.exports = CRUD;
