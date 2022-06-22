//imports
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const route = require('./routes/routes')

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(express.static('uploads'));
app.use('/api/post', route);

//DB
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
    
})
.then(() => console.log('connected to database'))
.catch((err) => console.log(err))   

//start server

app.listen(port, () => console.log(`server running at http://localhost:${port}`));
