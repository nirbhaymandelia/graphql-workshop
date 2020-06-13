const { registerUser, fetchUsers, login } = require("../users");
const { registerCustomer, fetchCustomers } = require("../customers");
const resolvers = {
  Query: {
    users: (parent, args, context) => {
      const { me } = context;
      console.log("---me----", me);

      const users = fetchUsers();
      return users;
    },

    customers: (parent, args, context) => {
      const customers = fetchCustomers();
      return customers;
    },
  },
  Mutation: {
    registerUser: async (parent, args) => {
      const user = await registerUser(args.user);
      return user;
    },
    login: async (parent, args) => {
      const token = await login(args.user);
      return token;
    },
    registerCustomer: async (parent, args) => {
      const customer = await registerCustomer(args.customer);
      return customer;
    },
  },
};

module.exports = resolvers;
