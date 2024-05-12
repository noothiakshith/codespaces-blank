import { pgTable,text } from "drizzle-orm/pg-core";


export const accounts = pgTable('acccounts',{
    id:text("id").primaryKey(),
    plaidId:text("plaid_id").notNull(),
    name:text("name").notNull(),
    userId:text("user_id").notNull(),
});