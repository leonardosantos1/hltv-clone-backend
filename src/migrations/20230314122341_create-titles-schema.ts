import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

    return knex.schema.createTable('titles', (table) => {
        table.uuid('id').primary();
        table.string('name', 100).notNullable();
        table.date('date').notNullable();
        table.string('location',100).notNullable();
      });

}


export async function down(knex: Knex): Promise<void> {

    return knex.schema.dropTableIfExists('titles');  
}

