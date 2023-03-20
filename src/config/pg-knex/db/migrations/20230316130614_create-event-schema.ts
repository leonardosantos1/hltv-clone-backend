import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

    return knex.schema.createTable('events', (table) => {
        table.uuid('id').primary();
        table.string('name', 100).notNullable();
        table.dateTime('date').notNullable();
        table.string('location').notNullable();
        table.string('mvp').nullable();
        table.decimal('prize_pool',7,2).notNullable(); 
      });
}


export async function down(knex: Knex): Promise<void> {
}

