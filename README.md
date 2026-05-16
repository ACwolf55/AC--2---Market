# AC-Market

A full-stack e-commerce demo with working Stripe checkout, user accounts, shopping cart, and a dual-database backend (PostgreSQL for users / carts, MongoDB for orders).

## What it does

- Browse products (currently seed data)
- Register / log in (bcrypt-hashed passwords, express-session)
- Add / remove items from cart (Redux-managed cart state)
- Checkout via **Stripe** (test card flow working end-to-end with `4242 4242 4242 4242`)
- Order written to MongoDB on successful payment

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 17 + TypeScript |
| State | Redux Toolkit + react-redux |
| Routing | React Router 6 |
| Payments | Stripe (`@stripe/react-stripe-js`) |
| Backend | Node.js + Express |
| User / cart DB | PostgreSQL (via Sequelize) |
| Order DB | MongoDB |
| Auth | bcrypt + express-session |
| HTTP | Axios |

## Why two databases?

I wanted to practice picking storage based on the shape of the data, not picking one DB and forcing everything into it:

- **PostgreSQL** for users and active carts — relational, transactional, well-suited to "user owns this cart" relationships
- **MongoDB** for orders — document-shaped (an order is a snapshot of items + addresses + amounts at a point in time), and historical orders don't need to reference the live catalog


## Project Structure

```
src/                  # React frontend
├── App.tsx
├── Components/
├── Styles/
├── redux/            # store + slices
└── hooks.tsx

server/               # Express backend
├── index.js
├── userController.js
├── cartController.js
├── mongodb.js
├── seed.sql          # Postgres seed
└── orders.json
```

## Getting Started

```bash
npm install

# Set env vars in .env:
#   STRIPE_SECRET_KEY=...
#   MONGO_URI=...
#   PG_CONNECTION_STRING=...

# Backend (in one terminal)
node server/index.js

# Frontend (in another)
npm run go    # PORT=3001 react-scripts start
```

Use Stripe test card `4242 4242 4242 4242` with any future expiry + any CVC.

## Roadmap

- [ ] Replace fruit seed data with a cohesive product catalog
- [ ] Polish UI (currently minimal)
- [ ] Redeploy (was on Heroku — moving to AWS)
- [ ] Migrate from CRA + React 17 to Vite + React 18
- [ ] Admin panel for managing inventory
- [ ] Cloudinary for product images
- [ ] Order history page

## What I Learned

- Stripe integration end-to-end (frontend Elements + backend payment intent handling)
- Redux Toolkit's modern slice pattern (way less boilerplate than classic Redux)
- Choosing storage by data shape (relational vs document) instead of defaulting to one
- Express session-based auth vs JWT — used sessions here, JWT in other projects, both have trade-offs
- bcrypt for password hashing (salt + work factor)
- Proxying React dev requests to a local Express backend
