import { drizzle } from "drizzle-orm/neon-serverless";
import { withReplicas } from "drizzle-orm/pg-core";
import * as schema from "./schema";

const casing = "snake_case";

const primaryDb = drizzle(process.env.DATABASE_PRIMARY_URL!, {
  schema,
  casing,
});

const replica1Db = drizzle(process.env.DATABASE_REPLICA1_URL!, {
  schema,
  casing,
});

const replica2Db = drizzle(process.env.DATABASE_REPLICA2_URL!, {
  schema,
  casing,
});

export const db = withReplicas(primaryDb, [replica1Db, replica2Db]);
