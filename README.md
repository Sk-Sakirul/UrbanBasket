# 🛒 UrbanBasket - Smart Shopping

## Introduction
UrbanBasket is a full-stack e-commerce platform designed for modern online shopping.
It provides a smooth shopping experience for customers and a powerful admin dashboard for store management.

Customers can browse, search, and add products to the cart without registering, but need to log in when checking out.
Admins can manage products, features, and orders in real time.

## Project Type
Fullstack (Frontend + Backend)

## Directory Structure
```
UrbanBasket/
├── server/         # Express.js + MongoDB backend with REST APIs
└── client/         # React + Redux Toolkit frontend with product catalog & cart
```

## Features
### 👤 User Features
-  🔍 Product Catalog – Browse, search, and filter products easily.

-  🛒 Smart Shopping Cart – Add, update, or remove items. Guest users can add items but must log in to checkout.

-  💳 Checkout & Payments – Secure checkout flow (PayPal integration).

-  🔐 Authentication – Register, login, and manage personal accounts.

### ⚙️ Admin Features

-   📊 Admin Dashboard – Manage products, features, and orders in real time.

-  🔐 Role-Based Access – Admin vs. customer separation for security.

-   📦 Order Management – Track and process customer orders.

### 📱 Other Features

-   Responsive design (works across desktop & mobile).

-   Role-based route protection (customers vs. admins).

-   Scalable architecture (MERN stack).

## Tech Stack
- Frontend: React.js, Redux Toolkit, React Router, Tailwind CSS

- Backend: Node.js, Express.js, MongoDB, Mongoose

- Authentication: JWT (JSON Web Tokens)

- Payments: PayPal

 - Deployment:

      - Frontend → Vercel

      - Backend → Render

## Installation & Getting Started
### Clone Repository
```
git clone https://github.com/Sk-Sakirul/UrbanBasket.git
cd UrbanBasket
```

### Backend Setup
```
cd server
npm install
npm run dev
```

### Frontend Setup
```
cd client
npm install
npm run dev
```

## Example .env Files

### Backend (/server/.env)
```
MONGO_URI=mongodb://127.0.0.1:27017/urbanbasket_db

JWT_SECRET_KEY=your_jwt_secret_key_here

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret

BASE_URL=http://localhost:5173

```

### Frontend (/frontend/.env)
```
VITE_BASE_URL=http://localhost:3000
```

## Design Decisions
- MERN Stack chosen for full control over backend and frontend.

- Redux Toolkit for predictable and scalable state management.

- Role-based Auth ensures secure separation of customers and admins.

- PayPal selected as payment gateway for global reach.

- Scalable Backend (Express + MongoDB) for handling products, orders, and features.

## Deployment
- Frontend: Vercel (CI/CD from GitHub)

- Backend: Render (auto deploy from branch)

- Database: MongoDB Atlas