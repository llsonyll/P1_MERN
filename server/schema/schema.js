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
  GraphQLNonNull,
  GraphQLEnumType,
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

// mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) }, // REQUIRED
        lastName: { type: GraphQLNonNull(GraphQLString) }, // REQUIRED
        role: {
          type: GraphQLNonNull(
            new GraphQLEnumType({
              name: "userRole",
              values: {
                admin: { value: "Admin" },
                regular: { value: "Regular" },
              },
            })
          ),
          defaultValue: "Admin",
        }, // REQUIRED
        phone: { type: GraphQLNonNull(GraphQLString) }, // REQUIRED
        email: { type: GraphQLNonNull(GraphQLString) }, // REQUIRED
        // userId: { type: GraphQLNonNull(GraphQLID)}
      },
      resolve(parent, args) {
        const user = new User({
          name: args.name,
          lastName: args.lastName,
          role: args.role,
          phone: args.phone,
          email: args.email,
        });

        // User.create(user)
        return user.save();
      },
    },
    deleteUser: {
      type: UserType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return User.findByIdAndRemove(args.id);
      },
    },
    addProduct: {
      type: ProductType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        brand: { type: GraphQLString },
        tag: { type: GraphQLList(GraphQLString) },
        quantity: { type: GraphQLFloat },
        unit: { type: GraphQLString },
        buyPrice: { type: GraphQLFloat },
        sellPrice: { type: GraphQLFloat },
        img: { type: GraphQLString },
      },
      resolve(parent, args) {
        const product = new Product({
          name: args.name,
          brand: args.brand,
          tag: args.tag,
          quantity: args.quantity,
          unit: args.unit,
          buyPrice: args.buyPrice,
          sellPrice: args.sellPrice,
          img: args.img,
        });
        return product.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
