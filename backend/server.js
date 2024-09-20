const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const app = express();

//Basic GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

//Resolvers
const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(
      `Server running on http://localhost:${PORT}${server.graphqlPath}`
    );
  });
}

startApolloServer();
