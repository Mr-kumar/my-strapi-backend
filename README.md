# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

This Strapi backend is deployed on **Railway** and integrated with a **Next.js frontend on Vercel**.

### 🚀 Railway Deployment
- **Live URL**: `https://my-strapi-backend-production-da92.up.railway.app`
- **Admin Panel**: `https://my-strapi-backend-production-da92.up.railway.app/admin`
- **API Endpoint**: `https://my-strapi-backend-production-da92.up.railway.app/api`

### 🔗 Frontend Integration (Vercel)
Add this environment variable to your Vercel project:
```
NEXT_PUBLIC_STRAPI_API_URL=https://my-strapi-backend-production-da92.up.railway.app
```

## 🗄️ Database Setup

This project automatically uses the appropriate database based on the environment:

- **Railway/Production**: PostgreSQL (via `DATABASE_URL` environment variable)
- **Local Development**: SQLite (via `DATABASE_FILENAME` in `.env`)

No additional setup required! The configuration automatically detects which database to use.

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed setup instructions.

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
