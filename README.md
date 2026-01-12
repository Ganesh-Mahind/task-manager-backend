# Task Manager Backend API

A RESTful API backend for a task management application built with Node.js, Express, and MongoDB.

## 🚀 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Environment Variables**: dotenv
- **CORS**: cors middleware

## 📋 Features

- User registration and authentication
- JWT-based authorization
- CRUD operations for tasks
- User-specific task management
- Secure password storage

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Task\Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory with the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start the server**
   ```bash
   # For development (if nodemon is installed)
   npm run dev
   
   # For production
   npm start
   ```

The server will start on port `5000` by default.

## 📡 API Endpoints

### Authentication Routes (`/api`)

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| POST | `/api/register` | Register a new user | `{name, email, password}` |
| POST | `/api/login` | Login user and get JWT token | `{email, password}` |

### Task Routes (`/api/tasks`) - *Authentication Required*

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/api/tasks` | Get all tasks for authenticated user | - |
| POST | `/api/tasks` | Create a new task | `{title, description, status}` |
| PUT | `/api/tasks/:id` | Update an existing task | `{title, description, status}` |
| DELETE | `/api/tasks/:id` | Delete a task | - |

## 🔐 Authentication

All task-related endpoints require JWT authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## 📊 Data Models

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed)
}
```

### Task Model
```javascript
{
  userId: ObjectId (ref: User),
  title: String,
  description: String,
  status: String (default: "Pending"),
  createdAt: Date (default: current date)
}
```

## 🗂️ Project Structure

```
Backend/
├── config/
│   └── db.js           # Database connection
├── controllers/
│   ├── authController.js  # Authentication logic
│   └── taskController.js  # Task CRUD operations
├── middleware/
│   └── authMiddleware.js # JWT authentication middleware
├── models/
│   ├── Task.js         # Task schema
│   └── User.js         # User schema
├── routes/
│   ├── authRoutes.js   # Authentication routes
│   └── taskRoutes.js   # Task management routes
├── .env                # Environment variables
├── .gitignore          # Git ignore file
├── package.json        # Dependencies and scripts
├── server.js           # Main server file
└── README.md           # This file
```

## 🚨 Error Handling

The API returns appropriate HTTP status codes and error messages:

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized (invalid or missing token)
- `500` - Internal Server Error

## 📝 Example Usage

### Register a User
```bash
curl -X POST http://localhost:5000/api/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'
```

### Login
```bash
curl -X POST http://localhost:5000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

### Create a Task
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your_jwt_token>" \
  -d '{"title":"Complete project","description":"Finish the task manager API","status":"In Progress"}'
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.
