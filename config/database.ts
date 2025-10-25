import path from "path";

export default ({ env }) => {
  // Use PostgreSQL if DATABASE_URL is provided (Railway/production)
  if (env("DATABASE_URL")) {
    return {
      connection: {
        client: "postgres",
        connection: {
          connectionString: env("DATABASE_URL"),
          ssl: {
            rejectUnauthorized: false,
          },
        },
        pool: {
          min: env.int("DATABASE_POOL_MIN", 2),
          max: env.int("DATABASE_POOL_MAX", 10),
        },
        acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
      },
    };
  }

  // Use SQLite for local development
  return {
    connection: {
      client: "sqlite",
      connection: {
        filename: path.join(process.cwd(), env("DATABASE_FILENAME", ".tmp/data.db")),
      },
      useNullAsDefault: true,
    },
  };
};
