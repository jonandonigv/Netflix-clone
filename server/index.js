const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');


const app = express();

dotenv.config();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.listen(8080, () => {
    console.log("[SERVER] Server is running in http://localhost:8080");
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log('[SERVER] DB connection successfull');
    }).catch((err) => console.log(err));
});