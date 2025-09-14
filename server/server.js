const express = require('express');
const connectToDB = require('./config/db');
const authRouter = require('./routes/auth/auth.routes');
require('dotenv').config();
const commonFeatureRouter = require("./routes/common/feature.routes");
const adminOrderRouter = require("./routes/admin/order.routes");
const adminProductsRouter = require("./routes/admin/product.routes");
const shopProductsRouter = require("./routes/shop/product.routes");
const shopAddressRouter = require("./routes/shop/address.routes");
const shopCartRouter = require("./routes/shop/cart.routes");
const shopOrderRouter = require("./routes/shop/order.routes");
const shopSearchRouter = require("./routes/shop/search.routes");
const shopReviewRouter = require("./routes/shop/review.routes");

var cookieParser = require("cookie-parser");
const cors = require('cors');


const app = express();

const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());

connectToDB();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

// Auth Routes
app.use('/api/auth', authRouter);

// Admin Routes
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter);

// Shop Routes
app.use("/api/shop/products", shopProductsRouter);
app.use('/api/shop/cart', shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/search", shopSearchRouter);
app.use("/api/shop/review", shopReviewRouter);


// Common Feature Routes
app.use('/api/common/feature', commonFeatureRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})