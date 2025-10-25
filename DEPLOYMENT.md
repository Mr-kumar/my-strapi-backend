# 🚀 Strapi Backend - Railway Deployment

This Strapi backend is deployed on Railway and connected to a Next.js frontend on Vercel.

## 🔧 Configuration

### CORS Settings
The backend is configured to accept requests from:
- Local development: `http://localhost:3000`, `http://localhost:3001`
- Vercel production: `https://startup-business-nzzar65mm-mr-kumars-projects.vercel.app`
- All Vercel deployments: `https://*.vercel.app`

### Database
- **Provider**: PostgreSQL (Railway managed)
- **Connection**: Configured via `DATABASE_URL` environment variable

## 🚀 Deployment

### Railway Backend
- **URL**: `https://my-strapi-backend-production-da92.up.railway.app`
- **Admin Panel**: `https://my-strapi-backend-production-da92.up.railway.app/admin`
- **API Base**: `https://my-strapi-backend-production-da92.up.railway.app/api`

### Frontend Integration
Set the following environment variable in your Vercel project:

```
NEXT_PUBLIC_STRAPI_API_URL=https://my-strapi-backend-production-da92.up.railway.app
```

## 🔄 Redeployment

After making changes to the CORS configuration:

1. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Configure CORS for Vercel frontend"
   git push origin main
   ```

2. **Railway will automatically redeploy** your backend

3. **Verify the connection** from your Vercel frontend

## 🧪 Testing

Test your API connection:
```bash
curl https://my-strapi-backend-production-da92.up.railway.app/api/services
```

Expected response should be JSON data, not a CORS error.

## 📚 Learn more

- [Strapi Documentation](https://docs.strapi.io)
- [Railway Deployment Guide](https://docs.railway.app)
- [Vercel Integration](https://vercel.com/docs)
