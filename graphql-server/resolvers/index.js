const { registerCustomer, fetchCustomers, login } = require("../customers");
const { addProduct, fetchProductById, fetchProducts } = require('../product')

const resolvers = {
  Query: {
    customers: (parent, args, context) => {
      const customers = fetchCustomers();
      return customers;
    },
    /* fetchProductById: (parent, args, context) => {
      const { me } = context;
      console.log('---me----', me, args);

      const product = fetchProductById(args.product.id);
      return product;
    }, */
    products: () => {
      const products = fetchProducts();
      return products;
    }
  },
  Mutation: {
    login: async (parent, args) => {
      const token = await login(args.user);
      return token;
    },
    registerCustomer: async (parent, args) => {
      const customer = await registerCustomer(args.customer);
      return customer;
    },
    addProduct: async (parent, args) => {
      const user = await addProduct(args.product);
      return user;
    },
  },
};

module.exports = resolvers;
