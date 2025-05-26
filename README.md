# Vehicle Service Booking System (Backend)

This is a Node.js + Express.js backend for a Vehicle Service Booking System.

## 🚀 Features

- User,Shop Registration and Login
- JWT Authentication
- Book vehicle services from selected shops
- View and delete user bookings
- Admin can managa all users, shops, and bookings
- Admin can update booking status
- MongoDB with Mongoose for data modeling

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Tokens)
- Bcrypt
- dotenv

## 📦 API Endpoints (Overview)

| Method | Endpoint                    | Role     | Description                      |
|--------|-----------------------------|----------|----------------------------------|
| POST   | /api/services/register      | User     | Register a new user              |
| POST   | /api/services/login         | User     | Login and get token              |
| POST   | /api/services               | User     | Create a new service booking     |
| GET    | /api/services               | User     | View own bookings                |
| DELETE | /api/services/:id           | User     | Cancel a booking                 |

| POST   | /api/shop/services/register      | Shop     | Register a new shop              |
| POST   | /api/shop/services/login         | Shop     | Login and get token              |
| GET    | /api/shop/services               | Shop     | View user bookings               |
| PATCH  | /api/shop/services/:id           | Shop     | Update a booking                 |

| GET    | /api/admin/services/users   | Admin    | View all users                   |
| GET    | /api/admin/services/shops   | Admin    | View all shops                   |
| GET    | /api/admin/services         | Admin    | View all bookings                |
| PATCH  | /api/admin/services/:id     | Admin    | Update booking status            |



## 📁 How to Run Locally


1. Clone the repo:
   git clone https://github.com/your-username/vehicle-service-booking-backend.git
   cd vehicle-service-booking-backend

2. Set up your env file:
    PORT=5000
    MONGO_URI=your_mongo_connection_string
    JWT_SECRET=your_jwt_secret

3. Run Locally:
    npm install
    npm run dev

