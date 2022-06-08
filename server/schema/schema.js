const { products, users } = require("../sampleData");

// Mongoose models
const Product = require("../models/Product");
const User = require("../models/User");

// const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLFloat,
} = require("graphql");

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    brand: { type: GraphQLString },
    tag: { type: new GraphQLList(GraphQLString) },
    quantity: { type: GraphQLFloat },
    unit: { type: GraphQLString },
    buyPrice: { type: GraphQLString },
    sellPrice: { type: GraphQLString },
    img: { type: GraphQLString },
    // user: {
    //   type: UserType,
    //   resolve(parent, args) {
    //     return users.find(user => user.id === parent.userId)
    //     return Clients.findById(parent.userId)
    //   }
    // }
  }),
});

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    role: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    products: {
      type: new GraphQLList(ProductType),
      resolve() {
        // return products;
        return Product.find();
      },
    },
    product: {
      type: ProductType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return products.find((product) => product.id == args.id);
        return Product.findById(args.id);
      },
    },
    clients: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        // return users;
        return User.find();
      },
    },
    client: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return users.find((user) => user.id == args.id);
        return User.findById(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
