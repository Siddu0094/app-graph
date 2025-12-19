# Deployment Guide

This guide covers multiple deployment options for the ReactFlow Canvas application.

## Prerequisites

1. Ensure your project builds successfully:
   ```bash
   npm install
   npm run build
   ```

2. The build output will be in the `dist/` directory.

## Deployment Options

### 1. Vercel (Recommended - Easiest)

Vercel provides excellent support for Vite projects with zero configuration.

#### Option A: Deploy via Vercel Dashboard

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

3. **Your app will be live** at `https://your-project.vercel.app`

#### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **For production**:
   ```bash
   vercel --prod
   ```

### 2. Netlify

#### Option A: Deploy via Netlify Dashboard

1. **Push your code to GitHub** (same as Vercel step 1)

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign in with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click "Deploy site"

#### Option B: Deploy via Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Build and deploy**:
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

### 3. Cloudflare Pages

1. **Push your code to GitHub** (same as above)

2. **Connect to Cloudflare Pages**:
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to Pages → Create a project
   - Connect your GitHub repository
   - Configure build settings:
     - **Framework preset**: Vite
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
   - Click "Save and Deploy"

### 4. Docker Deployment

For containerized deployment, use the included `Dockerfile`:

1. **Build the Docker image**:
   ```bash
   docker build -t reactflow-canvas .
   ```

2. **Run the container**:
   ```bash
   docker run -p 8080:80 reactflow-canvas
   ```

3. **Deploy to container platforms**:
   - **Docker Hub**: Push image and deploy to any container host
   - **Railway**: Connect GitHub repo, auto-detects Dockerfile
   - **Render**: Connect GitHub repo, uses Dockerfile
   - **Fly.io**: Use `flyctl` CLI to deploy

### 5. Static Hosting (GitHub Pages, AWS S3, etc.)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy the `dist/` folder**:
   - **GitHub Pages**: Use GitHub Actions (see `.github/workflows/deploy.yml`)
   - **AWS S3**: Upload `dist/` contents to S3 bucket with static hosting enabled
   - **Azure Static Web Apps**: Use Azure CLI or portal
   - **Google Cloud Storage**: Upload `dist/` with static website hosting

## Environment Variables

If you need to configure environment variables:

1. **Create `.env.production`** for production variables
2. **Vite uses `VITE_` prefix** for client-side variables:
   ```
   VITE_API_URL=https://api.example.com
   ```

3. **Configure in your hosting platform**:
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Environment Variables
   - Cloudflare Pages: Settings → Environment Variables

## Custom Domain

All platforms support custom domains:

- **Vercel**: Project Settings → Domains → Add Domain
- **Netlify**: Site Settings → Domain Management → Add Custom Domain
- **Cloudflare Pages**: Custom Domains → Add Custom Domain

## Continuous Deployment

All platforms support automatic deployments:
- Push to `main` branch → Production deployment
- Push to other branches → Preview deployment

## Troubleshooting

### Build Fails

1. Check Node.js version (should be 18+):
   ```bash
   node --version
   ```

2. Clear cache and rebuild:
   ```bash
   rm -rf node_modules dist
   npm install
   npm run build
   ```

### 404 Errors on Refresh

If you're using client-side routing, configure your hosting platform to serve `index.html` for all routes:
- **Vercel**: Auto-handled
- **Netlify**: Use `_redirects` file (included)
- **Cloudflare Pages**: Auto-handled

### Environment Variables Not Working

- Ensure variables are prefixed with `VITE_`
- Rebuild after adding variables
- Check platform-specific documentation

## Performance Optimization

The Vite build is already optimized, but you can:
- Enable compression (gzip/brotli) on your hosting platform
- Use a CDN (all platforms include CDN)
- Enable caching headers for static assets

## Monitoring

Consider adding:
- **Sentry** for error tracking
- **Google Analytics** for usage analytics
- **Vercel Analytics** (if using Vercel)

