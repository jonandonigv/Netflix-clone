const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const movieRoutes = require('./routes/movies');
const listRoutes = require('./routes/list');


const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(morgan('common'));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/lists', listRoutes);

app.listen(8000, () => {
    console.log("[SERVER] Server is running in http://localhost:8000");
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log('[SERVER] DB connection successfull');
    }).catch((err) => console.log(err));
});