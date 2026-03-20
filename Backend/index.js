import dotenv from "dotenv";
dotenv.config();   // Load env variables first

import connectDB from "./db/index.js";
import { app } from "./app.js";

// Error handling
process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err);
    process.exit(1);
});

process.on("unhandledRejection", (err) => {
    console.error("Unhandled Rejection:", err);
    process.exit(1);
});

// Connect DB and start server
connectDB()
.then(() => {
    const PORT = process.env.PORT || 5001;

    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
})
.catch((error) => {
    console.error("❌ MongoDB connection failed:", error);
});