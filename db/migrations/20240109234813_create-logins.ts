import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("logins", (table) => {
    table.uuid("id").primary();
    table.text("title").notNullable();
    table.text("user").notNullable();
    table.text("pass").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("logins");
}
