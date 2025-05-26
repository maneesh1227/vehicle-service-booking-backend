const express = require('express');
const connectDb = require("./configs/dbConnection");
const dotenv = require("dotenv").config();
connectDb();
const app = express();

const port = 4000;

app.use(express.json());


app.use('/api/services', require('./routes/userRoutes'))

app.use('/api/admin/services',require('./routes/serviceRoutes'))

app.use('/api/shop/services', require("./routes/shopRoutes"))


app.listen(port, ()=>{
    console.log(`Server is running on localhost:${port}`);
});