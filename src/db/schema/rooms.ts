import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const rooms = pgTable("rooms", {
  id: uuid().primaryKey().defaultRandom(),
  name: text("name").notNull(),
  description: text(),
  createdAt: timestamp().notNull().defaultNow(),
});
