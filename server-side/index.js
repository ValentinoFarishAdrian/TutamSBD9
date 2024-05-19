const express = require("express");
require('dotenv').config();
const app = express();
const cors = require('cors');
const postgrConnect = require('./database/dbConnect').con;
const routes = require('./routes/noteRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    origin: 'http://localhost:5173'
    })
);

app.use(routes);

app.listen(process.env.PORT, () => {
    console.log("Server is running and listening on port ", process.env.PORT);
});