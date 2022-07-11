/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import AppDataSource from './app/services/Database';
import dataSources from './app/graphql/dataSources';
import { resolvers } from './app/graphql/resolvers';
import typeDefinitions from './app/graphql/typeDefs';

const API_PORT = process.env.API_PORT || 3333;

const apolloBoot = async (): Promise<void> => {
  try {
    await AppDataSource.initialize();

    const server = new ApolloServer({
      typeDefs: typeDefinitions,
      resolvers,
      dataSources,
      stopOnTerminationSignals: true,
    });

    await server.listen(API_PORT);

    console.log(`Listening at http://localhost:${API_PORT}/graphql`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const expressBoot = async (): Promise<void> => {
  try {
    await AppDataSource.initialize();
    const app = express();
    app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );

    app.use(cors());
    app.use(bodyParser.json());
    app.get('/api', (_req, res) => {
      res.send({ message: 'Hello world' });
    });

    const server = app.listen(API_PORT, () => {
      console.log(`Listening at http://localhost:${API_PORT}`);
    });

    server.on('error', (err) => {
      console.error(err);
      process.exit(1);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

apolloBoot();
// expressBoot();
