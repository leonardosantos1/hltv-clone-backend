import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("event_teams", (table) => {
    table.uuid("id").primary();
    table.uuid("teams_id").notNullable().references("id").inTable("teams");
    table.uuid("events_id").notNullable().references("id").inTable("events");
  });
}

export async function down(knex: Knex): Promise<void> {}
