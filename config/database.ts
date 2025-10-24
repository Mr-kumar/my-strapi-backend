import path from "path";

export default ({ env }) => ({
  connection: {
    client: "postgres", // ✅ Use PostgreSQL (default on Railway)
    connection: {
      connectionString: env("DATABASE_URL"),
      ssl: {
        rejectUnauthorized: false, // ✅ Needed for Railway to connect securely
      },
    },
    pool: {
      min: env.int("DATABASE_POOL_MIN", 2),
      max: env.int("DATABASE_POOL_MAX", 10),
    },
    acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
  },
});
