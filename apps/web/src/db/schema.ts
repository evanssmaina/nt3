import { jsonb, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

const id = varchar({ length: 255 }).primaryKey();

export const users = pgTable("users", {
  id,
  name: text().notNull(),
  email: text().notNull().unique(),
  createdAt: timestamp({ mode: "string", withTimezone: true }).notNull(),
});

export const companies = pgTable("companies", {
  id,
  name: varchar({ length: 255 }).notNull(),
  description: text(),
  website: text().notNull(),
  xUrl: text(),
  createdAt: timestamp({ mode: "string", withTimezone: true }).notNull(),
});

export const tools = pgTable("tools", {
  id,
  companyId: varchar({ length: 255 })
    .notNull()
    .references(() => companies.id, { onDelete: "set null" }),
  name: varchar({ length: 255 }).notNull(),
  shortSummary: text().notNull(),
  slug: text().notNull(),
  description: text().notNull(),
  imageIconUrl: text().notNull(),
  website: text().notNull(),
  githubUrl: text(),
  docsUrl: text(),
  categories: jsonb().notNull(),
  languagesSupported: jsonb().default([]).notNull(),
  createdAt: timestamp({ mode: "string", withTimezone: true }).notNull(),
});
