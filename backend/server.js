const express = require("express");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Middleware
app.use(express.json());

// Product routes
app.use("/api/products", productRoutes);

// Home route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "E-Commerce Backend is running"
    });
});

// 404 error handling
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Start server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});