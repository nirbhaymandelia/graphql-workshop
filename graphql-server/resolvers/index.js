const {registerUser, fetchUsers, login} = require('../users')
const resolvers = {
    Query: {
        users: (parent, args, context) => {
            const {me} = context;
            console.log('---me----',me);
            
          const users =   fetchUsers();
          return users;
        }
    },
    Mutation: {
        registerUser: async (parent, args) => {
            const user = await registerUser(args.user);
            return user;
        },
        login: async (parent, args) => {
            const token = await login(args.user);
            return token;
        }
    },
    
}

module.exports = resolvers;