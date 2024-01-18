import { Knex } from "knex";

declare module "knex/types/tables" {
  export interface Tables {
    logins: {
      id: string;
      title: string;
      user: string;
      pass: string;
    };
  }
}
