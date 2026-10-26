# ShopCart – Full-Stack E-Commerce Application

ShopCart is a full-stack e-commerce web application built to practice and demonstrate frontend and backend web development skills.

## Features

- Browse and search products
- View individual product details
- Add products to the cart
- Increase or decrease product quantities
- Remove products from the cart
- Add and remove wishlist items
- Move wishlist products to the cart
- User registration and login
- JWT-based authentication
- Checkout form with input validation
- Responsive user interface

## Tech Stack

**Frontend**
- React
- Vite
- Tailwind CSS
- Axios
- React Router

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt

## Project Structure

```text
shopCart/
├── E-Commerce/
│   └── ecommerce-frontend/
└── Express/
    └── server/
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/garvitjangid3255-cybe/ShopCart.git
cd ShopCart
```

### 2. Set up the backend

```bash
cd Express/server
npm install
```

Create a `.env` file in `Express/server/` and configure the environment variables required by the backend, such as the server port, MongoDB connection string, and JWT secret.

Start the backend using the start script configured in `package.json`.

### 3. Set up the frontend

Open a second terminal:

```bash
cd E-Commerce/ecommerce-frontend
npm install
npm run dev
```

Open the local URL displayed by Vite in your terminal.

## Security

- Keep environment variables and credentials in `.env`.
- Never commit `.env` files or expose database credentials and JWT secrets.

## Author

**Garvit Jangid**

GitHub: [@garvitjangid3255-cybe](https://github.com/garvitjangid3255-cybe)

## Disclaimer

This project was developed for learning and portfolio purposes.
