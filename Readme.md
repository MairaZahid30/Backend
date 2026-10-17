# Express Backend API

A simple REST API built with **Node.js**, **Express**, and **PostgreSQL**. It lets you fetch **users** and **products** from a database.

## Tech Stack

- [Node.js](https://nodejs.org/) (ES Modules)
- [Express 5](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/) with the [`pg`](https://node-postgres.com/) package
- [dotenv](https://github.com/motdotla/dotenv) for environment variables
- [cors](https://github.com/expressjs/cors) for cross-origin requests
- [nodemon](https://nodemon.io/) for auto-restart during development

## Project Structure

```
Backend/
├── controllers/    # Logic that handles each request
├── models/         # Database queries
├── routes/         # API route definitions
├── public/         # Static files
├── app.js          # Entry point: starts the server
├── db.js           # PostgreSQL connection
├── package.json
└── .env            # Your private settings (you create this; it is not on GitHub)
```

## Getting Started

### 1. Prerequisites

Make sure you have these installed:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Postman](https://www.postman.com/downloads/) (optional, for testing the API)

### 2. Clone the repository

```bash
git clone https://github.com/MairaZahid30/Backend
cd Backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Set up the database

1. Open PostgreSQL (pgAdmin or the command line).
2. Create a database named `crud_db`.
3. Create the required tables in the `public` schema:

```sql
-- Users table
CREATE TABLE IF NOT EXISTS public.users (
    id    SERIAL PRIMARY KEY,
    name  VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    age   INTEGER
);

-- Products table
-- [add your CREATE TABLE statement for products here]
```

### 5. Create a `.env` file

In the project root, create a file named `.env` and add your own values:

```env
db_user=postgres
db_password=your_password
db_database=crud_db
```

- `db_user` is `postgres` unless you created a different PostgreSQL user.
- `db_password` is the password you set when you installed PostgreSQL.
- `db_database` is the name of the database you created in step 4.
- Keep the variable names in lowercase exactly as shown, because the code looks for these names.
- The app connects to PostgreSQL on `localhost`, port `5432`.

> **Important:** never share your `.env` file or upload it to GitHub. Make sure `.env` is listed in your `.gitignore`.

### 6. Start the server

```bash
npm start
```

The server runs on port **5000** and restarts automatically when you save changes. Open `http://localhost:5000/api/users` in your browser to check that it works.

## API Endpoints

| Method | Endpoint | Purpose |
| ------ | -------- | ------- |
| `GET` | `/api/users` | Get all users |
| `GET` | `/api/products` | Get all products |

## Testing with Postman

1. Open Postman and create a new request.
2. Set the method to **GET**.
3. Enter `http://localhost:5000/api/users` (or `/api/products`).
4. Click **Send**. You should see the data returned as JSON.

## Author

**Maira Zahid** - [GitHub](https://github.com/MairaZahid30)