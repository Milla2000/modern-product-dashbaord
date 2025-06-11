

# Product Dashboard (Next.js + React Query)

## Setup Instructions

1. **Install dependencies:**
   ```powershell
   npm install
   ```
2. **Run the development server:**
   ```powershell
   npm run dev
   ```
3. **Open** [http://localhost:3000/products](http://localhost:3000/products) **to view the product dashboard.**

## Features
- Product listing with responsive grid 
- Search and filter by category (client-side)
- Product details page with dynamic routing
- API fetching and caching via React Query
- Loading and error states
- Dark mode toggle (optional, see Layout)

## Architecture Notes
- API logic is in `src/lib/api.ts`
- React Query is set up in `src/components/ReactQueryProvider.tsx` and injected in root layout
- Product UI components are in `src/components/`
- Pages use Next.js App Router (`/products` and `/products/[id]`)

## Customization
- To add dark mode, see `Layout.tsx` and add a toggle using Tailwind's dark mode classes.

---

**For questions, see code comments or contact the maintainer.**
#
