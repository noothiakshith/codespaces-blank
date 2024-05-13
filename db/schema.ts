import { pgTable,text } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const accounts = pgTable('acccounts',{
    id:text("id").primaryKey(),
    plaidId:text("plaid_id").notNull(),
    name:text("name").notNull(),
    userId:text("user_id").notNull(),
});

const insertUserschema = createInsertSchema(accounts);