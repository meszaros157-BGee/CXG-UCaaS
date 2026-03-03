# Deployment

## GitHub Repository Setup
1. Create a new repository (e.g., `engen-proposal`)
2. Push the local project:
   ```bash
   git remote add origin https://github.com/<org>/engen-proposal.git
   git push -u origin main
   ```

## Vercel Project Setup
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the GitHub repository
3. Configure:
   - **Framework Preset:** Next.js
   - **Root Directory:** `.` (project root)
   - **Build Command:** `pnpm build`
   - **Install Command:** `pnpm install`
   - **Output Directory:** leave blank (Next.js default)

## Root Directory Rules
- The Vercel project root must point to the repository root
- Do not nest this project inside a monorepo without updating the root directory setting

## Build Command
```bash
pnpm build
```

## Environment Variables
- Managed in Vercel project settings under Environment Variables
- Add variables for each environment (Production, Preview, Development)
- Common variables:
  - `NEXT_PUBLIC_GA_ID` — Google Analytics measurement ID
  - Additional keys as needed

## How to Redeploy
- **Automatic:** Push to `main` branch triggers a production deploy
- **Manual:** Go to Vercel dashboard → Deployments → Redeploy
- **CLI:** `vercel --prod` (requires Vercel CLI installed)
