# ShopReact — Advanced React E-Commerce Web App

A modern, fully-featured e-commerce storefront built with **React 18**, **Redux Toolkit**, **TanStack React Query**, and the **FakeStoreAPI**. Designed with clean component architecture, real API integration, and persistent cart state.

---

## Table of Contents

- [Features](#features)
- [Local Demo](#local-demo)
- [How the App Works](#how-the-app-works)
- [Tech Stack](#tech-stack)
- [API Used](#api-used)
- [Installation & Running](#installation--running)
- [Project Structure](#project-structure)
- [Authentication Note](#authentication-note)
- [Requirements Checklist](#requirements-checklist)
- [Future Improvements](#future-improvements)
- [Author](#author)

---

## Features

- 🛍️ **Product Catalog** — Browse 20 real products from FakeStoreAPI with images, ratings, descriptions, prices, and categories
- 🔽 **Category Filter** — Dynamic dropdown that fetches categories from the API (no hard-coded values)
- 🛒 **Shopping Cart** — Add, remove, and update quantities; duplicate adds increase quantity instead of creating duplicates
- 💾 **Session Persistence** — Cart is saved to `sessionStorage` and fully restored on page reload
- ✅ **Simulated Checkout** — Clears the cart and sessionStorage, then shows a success confirmation message
- 📱 **Responsive Design** — Works cleanly on desktop, tablet, and mobile
- ⏳ **Loading Skeletons** — Animated placeholder cards while products are fetching
- ⚠️ **Error Handling** — Friendly error states with clear messages for API failures
- 🖼️ **Broken Image Fallback** — Displays a placeholder if a product image fails to load

---

## Local Demo

This project runs locally. There is no deployed version.

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### App walkthrough

1. **Browse products** on the Home page — scroll to see all 20 items
2. **Filter by category** using the dropdown — categories are loaded dynamically from the API
3. **Add items to cart** — the navbar badge updates instantly
4. **Navigate to Cart** via the navbar link
5. **Adjust quantities** with the +/− buttons, or **remove** an item entirely
6. **View the order summary** with per-item subtotals and grand total
7. **Checkout** — clears the cart and shows a success message
8. **Refresh the page** — cart is restored from `sessionStorage` automatically

---

## How the App Works

| Layer | Responsibility |
|-------|---------------|
| **React Query** | Fetches products and categories from FakeStoreAPI; handles loading, error, and caching states automatically |
| **Redux Toolkit** | Manages global cart state (add, remove, update quantity, clear) |
| **sessionStorage** | Persists cart data across page refreshes within the same browser session |
| **React Router v6** | Handles client-side navigation between the Home (`/`) and Cart (`/cart`) pages |
| **Checkout flow** | Dispatches `clearCart`, wipes `sessionStorage`, and shows a confirmation message |

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| React Router v6 | Client-side routing |
| TanStack React Query v5 | Server state, data fetching & caching |
| Redux Toolkit | Global cart state management |
| React Redux | Redux bindings for React |
| sessionStorage | Cart persistence across refreshes |
| CSS (plain) | Styling — no external UI library |

---

## API Used

**FakeStoreAPI** — `https://fakestoreapi.com`

| Endpoint | Used for |
|----------|----------|
| `GET /products` | Fetch all products |
| `GET /products/categories` | Category list for the filter dropdown |
| `GET /products/category/{cat}` | Products filtered by a specific category |

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

## Project Structure

```
src/
├── app/
│   └── store.js                  # Redux store configuration
├── features/
│   └── cart/
│       └── cartSlice.js          # Cart reducer + actions + selectors
├── components/
│   ├── Navbar.jsx / .css         # Top navigation with cart badge
│   ├── ProductCard.jsx / .css    # Individual product card
│   ├── CategoryFilter.jsx / .css # Category dropdown
│   └── CartItem.jsx / .css       # Cart row with quantity controls
├── pages/
│   ├── Home.jsx / .css           # Product listing page
│   └── Cart.jsx / .css           # Shopping cart page
├── services/
│   └── api.js                    # FakeStoreAPI fetch functions
├── App.jsx                       # Routes definition
├── main.jsx                      # App entry point (providers)
└── index.css                     # Global reset & variables
```

---

## Authentication Note

This project does **not** include user authentication. The assignment scope focuses on:

- Product catalog with real API data via React Query
- Cart state management with Redux Toolkit
- Session persistence with `sessionStorage`
- Simulated checkout flow

Authentication is intentionally out of scope here but could be added in a future iteration using **Auth0**, **Firebase Auth**, or a custom **JWT-based login** flow.

---

## Requirements Checklist

### Product Catalog
- [x] Product catalog fetched from FakeStoreAPI with React Query
- [x] Display title, price, category, description, rating, and image per product
- [x] "Add to Cart" button on every product
- [x] Broken image fallback placeholder

### Category Filter
- [x] Category dropdown fetched dynamically from the API (no hard-coded values)
- [x] Filter by category with an "All Products" option included

### Shopping Cart
- [x] Redux Toolkit `cartSlice` with `addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`
- [x] Duplicate product adds increase quantity, not duplicate entries
- [x] Cart page shows image, title, quantity, price, and subtotal per item
- [x] Remove button per cart item
- [x] Quantity increase / decrease buttons
- [x] Total item count and total price displayed

### Checkout & Persistence
- [x] Checkout button clears cart and sessionStorage
- [x] Success message shown after checkout
- [x] Cart loaded from `sessionStorage` on startup
- [x] Cart saved to `sessionStorage` on every change

### Routing & UI
- [x] React Router with `/` and `/cart` routes
- [x] Navbar with Home and Cart links
- [x] Cart item count badge in navbar
- [x] Loading skeletons during API fetch
- [x] Error state for failed requests
- [x] Responsive layout (desktop + mobile)
- [x] Clean, organized folder structure

---

## Future Improvements

- [ ] Add real user authentication (Auth0, Firebase Auth, or JWT)
- [ ] Add a product details page with full description and related items
- [ ] Add search functionality to filter products by name
- [ ] Integrate a real checkout / payment system (e.g. Stripe)
- [ ] Add backend order history to track past purchases

---

## Author

**Abdelrahman Yousef**

GitHub: [github.com/AbdelrahmanYousef9266](https://github.com/AbdelrahmanYousef9266)
