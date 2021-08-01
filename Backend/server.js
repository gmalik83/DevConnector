const express = require('express');

const app = express();

const connectDB = require('./config/db');

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('API is Running'));

// Defined Routes
app.use('/api/users', require('./Routes/api/users'));
app.use('/api/auth', require('./Routes/api/auth'));
app.use('/api/profile', require('./Routes/api/profile'));
app.use('/api/posts', require('./Routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started at port ${PORT}`));
