import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

    return knex.schema.createTable('players', (table) => {
        table.uuid('id').primary();
        table.string('nickname', 100).unique().notNullable();
        table.integer('age').notNullable();
        table.boolean('is_coach').notNullable();
        table.uuid('title_id').nullable().references('id').inTable('titles');
      });

}


export async function down(knex: Knex): Promise<void> {

    return knex.schema.dropTableIfExists('players');

}

