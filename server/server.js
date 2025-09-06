const express = require('express');
const connectToDB = require('./config/db');
const authRouter = require('./routes/auth/auth.routes');
require('dotenv').config();
var cookieParser = require("cookie-parser");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());

connectToDB();

// Auth Routes
app.use('/api/auth', authRouter);

app.get("/", (req, res) => {
  res.send("working...");
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})