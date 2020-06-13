const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    users: [User]
    customers: [Customer]
    product: [Product]
  }

  type Mutation {
    registerUser(user: UserInput): User
    login(user: LoginInput): String
    registerCustomer(customer: CustomerInput): Customer
  }

  input UserInput {
    name: String
    age: Int
    password: String
    email: String
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

  type User {
    id: ID
    name: String
    email: String
    age: Int
  }

  type Customer {
    id: ID
    name: String
    email: String
    address: String
  }

  type Product {
    id: ID!
    name: String
    category: String
    price: Float!
  }
`;

module.exports = typeDefs;
