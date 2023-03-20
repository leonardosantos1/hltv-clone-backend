import { knex as setupKnex, Knex } from "knex";


export const configKnex: Knex.Config = {
  client: "pg",
  connection: {
    host: "localhost",
    user: "root",
    password: "root",
    database: "hltv-clone",
  },
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: "./src/migrations",
  },
};

export const knex = setupKnex(configKnex);
