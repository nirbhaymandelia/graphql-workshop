const {gql} = require('apollo-server');

const typeDefs = gql`
    type Query {
        users: [User]
    }

    type Mutation {
        registerUser(user: UserInput): User,
        login(user: LoginInput): String
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

    type User {
        id: ID
        name: String
        email: String
        age: Int
    }
`;

module.exports =typeDefs;