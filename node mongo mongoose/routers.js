const express = require('express');

const app = express();

const admin = express.Router(); 

app.use('/admin', admin);

app.get('/home', (req, res) =>{
    res.send('Hello, from app!');
})

admin.get('/home', (req, res) =>{
    res.send('Hello, from admin!');
})


app.listen(3005, function(){
    console.log('Server is running on port 3005');
})