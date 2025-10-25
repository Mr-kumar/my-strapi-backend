export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: [
        "http://localhost:3000", // Local development
        "http://localhost:3001",
        "https://startup-business-three.vercel.app/", // Your Vercel domain
        "https://*.vercel.app", // All Vercel preview deployments
        "https://vercel.app", // Vercel main domain
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
      headers: [
        "Content-Type",
        "Authorization",
        "Origin",
        "Accept",
        "Accept-Language",
        "X-Requested-With",
      ],
      credentials: true,
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
