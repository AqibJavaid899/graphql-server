const graphql = require("graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;

const UserTypeDef = require("./TypeDefs/UserType");
const UserData = require("../MOCK_DATA.json");

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUserData: {
      type: new GraphQLList(UserTypeDef),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return UserData;
      },
    },
    getUserById: {
      type: UserTypeDef,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        const data = UserData.find((user) => user.id === args.id);
        return data;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createNewUser: {
      type: UserTypeDef,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        UserData.push({
          id: UserData.length + 1,
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          password: args.password,
        });
        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
