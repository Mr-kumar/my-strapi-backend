export default ({ env }) => ({
  host: "0.0.0.0", // ✅ Railway requires this
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
