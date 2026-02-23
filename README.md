This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!


## Publishing Changes to Your Website (Vercel + GitHub)

Follow these steps to safely publish updates to your website:

### 1. Make and Test Your Changes Locally
- Edit your files as needed.
- Run the development server to preview changes:
	```bash
	npm run dev
	```
- Visit [http://localhost:3000](http://localhost:3000) to verify everything works as expected.

### 2. Commit and Push Changes to GitHub
- Stage your changes:
	```bash
	git add .
	```
- Commit with a clear message:
	```bash
	git commit -m "Describe your changes"
	```
- Push to the main branch (or your deployment branch):
	```bash
	git push origin main
	```

### 3. Vercel Deployment
- Vercel is connected to your GitHub repository.
- Every push to the main branch triggers an automatic deployment.
- You can monitor deployment progress and logs at [https://vercel.com/dashboard](https://vercel.com/dashboard).

### 4. Post-Deployment Checklist
- Visit your live site to confirm updates are visible.
- If you use environment variables, make sure they are set correctly in the Vercel dashboard.
- If you encounter build errors, check the Vercel deployment logs for details.

### Troubleshooting Tips
- If changes do not appear, ensure you pushed to the correct branch.
- Check for build errors in the Vercel dashboard.
- Make sure all dependencies are up to date (`npm install`).
- For cache issues, try redeploying from the Vercel dashboard.

---
For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) and [Vercel documentation](https://vercel.com/docs).
