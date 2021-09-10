// import typeDefs from "../graphql/typeDefs.js";
// import resolvers from "../graphql/resolvers.js";

import {ApolloServer} from 'apollo-server';
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers.js";

// const {ApolloServer, gql} = require("apollo-server");

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url}) => {
    console.log(`Listening at ${url}`);
});