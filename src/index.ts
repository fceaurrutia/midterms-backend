import express from 'express';
import 'dotenv/config';
import { getApolloServer } from './server';
import cors from 'cors';

// Import schemas
const app = express();
const corsOptions = { origin: '*', credentials: true };

app.use(express.json());
app.use(cors(corsOptions));

getApolloServer()
  .then(server => {
    const port: number = parseInt(process.env.PORT || '3005');

    server.applyMiddleware({
      cors: false,
      app,
      path: '/graphql',
    });
    app.listen({ port }, (): void =>
      console.log(
        `🚀 GraphQL-Server is running on http://localhost:${port}/graphql`
      )
    );
  })
  .catch(err => {
    console.log(err);
  });
