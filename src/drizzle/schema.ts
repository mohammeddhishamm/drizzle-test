// src/drizzle/schema.ts
import { pgTable, serial, varchar, text } from 'drizzle-orm/pg-core';

// Define tables using Drizzle ORM's schema builder
export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 100 }).notNull(),
    email: varchar('email', { length: 100 }).notNull().unique(),
});

export const posts = pgTable('posts', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 255 }).notNull(),
    content: text('content').notNull(),
    userId: serial('userId').notNull(),
});
