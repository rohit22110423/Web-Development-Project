import express from "express";
import dotenv from "dotenv";
import mysql from "mysql2/promise"; // use promise wrapper for async/await
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config(); // load environment variables early

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Create MySQL connection
const db = await mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "Book_Store_DB",
});

try {
  await db.connect();
  console.log("✅ Database connected successfully");
} catch (err) {
  console.error("❌ Database connection failed:", err.message);
  process.exit(1); // Stop the server if DB is not connected
}

// Inject db to requests
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

export default db;
