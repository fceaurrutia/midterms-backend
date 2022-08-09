import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { resolvers } from './resolvers';

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
