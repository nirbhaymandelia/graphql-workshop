const axios = require("axios");

const instance = axios.create({
  baseURL: "http://localhost:3010/",
});

const registerCustomer = async (customer) => {
  try {
    const { data } = await instance.post("/customer", {
      password: customer.password,
      name: customer.name,
      email: customer.email,
      address: customer.address,
    });
    return data;
  } catch (e) {
    console.error("---error registering customers--", e);
    throw e;
  }
};

const fetchCustomers = async () => {
  try {
    const { data } = await instance.get("/customers");
    return data;
  } catch (e) {
    console.error("---error fetching customers--", e);
    throw e;
  }
};

const login = async (user) => {
  try {
    const { data } = await instance.post('/login', {
      email: user.email,
      password: user.password
    })

    return data;
  } catch (e) {
    console.error('---error login users--', e);
    throw e;
  }
}

module.exports = { registerCustomer, fetchCustomers, login };
