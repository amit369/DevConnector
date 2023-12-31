const express = require('express');
const connectDB = require('./config/db');
const app = express();

const PORT = process.env.PORT || 5000;

// connect Database 
connectDB();

// init middleware
app.use(express.json({ extended : false  }));

// Define routes
app.use('/api/users' , require('./routes/api/users'));
app.use('/api/auth' , require('./routes/api/auth'));
app.use('/api/profile' , require('./routes/api/profile'));
app.use('/api/posts' , require('./routes/api/posts'));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.get('/',(req,res) => {
    console.log("API is running");
    res.json("API is running ");
})

