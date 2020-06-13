const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    customers: [Customer]
    products: [Product]
  }

  type Mutation {
    login(customer: LoginInput): String
    registerCustomer(customer: CustomerInput): Customer,
    addProduct(product: ProductInput): Product,
  }

  input LoginInput {
    email: String
    password: String
  }

  input CustomerInput {
    name: String
    email: String
    password: String
    address: String
  }

  type Customer {
    id: ID
    name: String
    email: String
    address: String
  }

  input ProductInput {
        name: String
        price: Float!
        category: String
    }

  type Product {
    id: ID!
    name: String
    category: String
    price: Float!
  }
`;

module.exports = typeDefs;
