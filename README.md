# ShopReact — Advanced React E-Commerce Web App

A modern, fully-featured e-commerce storefront built with React, Redux Toolkit, React Query, and the FakeStoreAPI.

---

## Features

- **Product Catalog** — Browse 20 real products from FakeStoreAPI with images, ratings, descriptions, prices, and categories
- **Category Filter** — Dynamic dropdown that fetches categories from the API (no hard-coded values)
- **Shopping Cart** — Add, remove, and update quantities; duplicate adds increase count instead of creating duplicates
- **Session Persistence** — Cart is saved to `sessionStorage` and restored on page load
- **Simulated Checkout** — Clears the cart and sessionStorage, shows a success message
- **Responsive Design** — Works on desktop, tablet, and mobile
- **Loading Skeletons** — Animated skeleton cards while products are fetching
- **Error Handling** — Friendly error states with messages for API failures
- **Broken Image Fallback** — Shows a placeholder if a product image fails to load

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| React Router v6 | Client-side routing |
| TanStack React Query v5 | Server state, fetching & caching |
| Redux Toolkit | Global cart state management |
| React Redux | Redux bindings for React |
| sessionStorage | Cart persistence across refreshes |
| CSS (plain) | Styling — no external UI library |

---

## API Used

**FakeStoreAPI** — `https://fakestoreapi.com`

| Endpoint | Used for |
|----------|----------|
| `GET /products` | All products |
| `GET /products/categories` | Category list for dropdown |
| `GET /products/category/{cat}` | Products filtered by category |

---

## Installation & Running

```bash
# 1. Clone or download the project
cd "Advanced React E-Commerce Web App"

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## How to Use

1. **Browse products** on the Home page — scroll to see all 20 items
2. **Filter by category** using the dropdown — categories load from the API
3. **Add items to cart** with the "Add to Cart" button — the navbar badge updates instantly
4. **Navigate to Cart** via the navbar link
5. **Adjust quantities** with the +/− buttons, or **remove** an item entirely
6. **View the order summary** with per-item subtotals and grand total
7. **Checkout** — clears the cart and shows a success message
8. **Refresh the page** — cart is restored from sessionStorage automatically

---

## Project Structure

```
src/
├── app/
│   └── store.js                 # Redux store configuration
├── features/
│   └── cart/
│       └── cartSlice.js         # Cart reducer + actions + selectors
├── components/
│   ├── Navbar.jsx / .css        # Top navigation with cart badge
│   ├── ProductCard.jsx / .css   # Individual product card
│   ├── CategoryFilter.jsx / .css# Category dropdown
│   └── CartItem.jsx / .css      # Cart row with quantity controls
├── pages/
│   ├── Home.jsx / .css          # Product listing page
│   └── Cart.jsx / .css          # Shopping cart page
├── services/
│   └── api.js                   # FakeStoreAPI fetch functions
├── App.jsx                      # Routes definition
├── main.jsx                     # App entry point (providers)
└── index.css                    # Global reset & variables
```

---

## Requirements Checklist

- [x] Product catalog fetched from FakeStoreAPI with React Query
- [x] Display title, price, category, description, rating, and image per product
- [x] "Add to Cart" button on every product
- [x] Broken image fallback placeholder
- [x] Category dropdown fetched dynamically (no hard-coded values)
- [x] Filter by category; "All Products" option included
- [x] Redux Toolkit `cartSlice` with `addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`
- [x] Duplicate product adds increase quantity, not duplicate entries
- [x] Cart page shows image, title, quantity, price, subtotal
- [x] Remove button per cart item
- [x] Quantity increase / decrease buttons
- [x] Total item count and total price displayed
- [x] Checkout button clears cart and sessionStorage
- [x] Success message shown after checkout
- [x] Cart loaded from sessionStorage on startup
- [x] Cart saved to sessionStorage on every change
- [x] React Router with `/` and `/cart` routes
- [x] Navbar with Home and Cart links
- [x] Cart item count badge in navbar
- [x] Loading skeletons during API fetch
- [x] Error state for failed requests
- [x] Responsive layout (desktop + mobile)
- [x] Clean organized folder structure
