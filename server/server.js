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

var cookieParser = require("cookie-parser");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());

connectToDB();

// Auth Routes
app.use('/api/auth', authRouter);

// Admin Routes
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter);

// Shop Routes
app.use("/api/shop/products", shopProductsRouter);
app.use('/api/shop/cart', shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);


// Common Feature Routes
app.use('/api/common/feature', commonFeatureRouter)

// app.get("/", (req, res) => {
//   res.send("working...");
// });

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})