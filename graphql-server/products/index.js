const axios = require("axios");

const instance = axios.create({
  baseURL: "http://localhost:3040/",
});

const addProduct = async (product) => {
  try {
    const { data } = await instance.post("/product", {
      name: product.name,
      category: product.category,
      price: product.price,
    });
    return data;
  } catch (e) {
    console.error("---error adding new product---", e);
    throw e;
  }
};

const getProducts = async () => {
  try {
    const { data } = await instance.get("/products");
    return data;
  } catch (e) {
    console.error("---error fetching products--", e);
    throw e;
  }
};

module.exports = { addProduct, getProducts };
