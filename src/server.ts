import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./resolvers";
import { buildSchema } from "type-graphql";

export const getApolloServer = async () => {
  const server = await Promise.resolve(
    new ApolloServer({
      schema: await buildSchema({
        resolvers,
      }),
    })
  );
  await server.start();
  return server;
};
