// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// app.use("/", (req, res) => {
//     res.json({ message: "Hello world" });
// })
const routes = require('./routes');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(routes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
