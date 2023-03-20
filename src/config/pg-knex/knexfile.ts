import { knex as setupKnex, Knex } from "knex";

const config: Knex.Config = {
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
    directory: "./db/migrations",
  },
};

export const knex = setupKnex(config);
