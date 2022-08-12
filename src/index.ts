import express from 'express';
import 'dotenv/config';
import { getApolloServer } from './server';
import cors from 'cors';

// Import schemas
const app = express();

app.use(cors());
app.use(express.json());

getApolloServer()
  .then(server => {
    const port: number = parseInt(process.env.PORT || '3005');

    server.applyMiddleware({ app, path: '/graphql' });
    app.listen({ port }, (): void =>
      console.log(
        `🚀 GraphQL-Server is running on http://localhost:${port}/graphql`
      )
    );
  })
  .catch(err => {
    console.log(err);
  });
