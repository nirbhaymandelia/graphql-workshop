const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:3000/'
});

const addProduct = async (product) => {
  try {
    const { data } = await instance.post('/product', {
      name: product.name,
      category: product.category,
      price: product.price,
    })
    return data;
  } catch (e) {
    console.error('---error adding product--', e);
    throw e;
  }
};

const fetchProducts = async () => {
  try {
    const { data } = await instance.get('/products');
    return data;
  } catch (e) {
    console.error('---error fetching products--', e);
    throw e;
  }
};

const fetchProductById = async (id) => {
  try {
    const { data } = await instance.get(`/products/${id}`)
  } catch(e) {
    console.error('---Error fetching product ---', e);
  }
};

module.exports = { addProduct, fetchProducts, fetchProductById };
