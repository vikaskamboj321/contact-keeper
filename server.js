const express = require('express');
const contact = require('./routes/contact');
const connectDB = require('./config/db');
const app = express();

//connect db
connectDB();

//init middleware
app.use(express.json({extended:false}))

app.get("/", (req,res) => {
    res.send(`Contact Keeper Api`);
});

//define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contact', contact);
app.use('/upload-file', require('./routes/Fileupload'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
});