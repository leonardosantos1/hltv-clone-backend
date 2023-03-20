import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('teams', (table) => {
        table.uuid('id').primary();
        table.string('name', 100).notNullable();
        table.integer('ranking_position').nullable();
        table.uuid('title_id').nullable().references('id').inTable('titles');
        table.uuid('player_id').nullable().references('id').inTable('players');
      });
}


export async function down(knex: Knex): Promise<void> {

    return knex.schema.dropTableIfExists('teams');

}

