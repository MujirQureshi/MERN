const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());


app.get('/', (req, res) => {
    
    res.send('Hello, Mujir!');
});



app.get('/example', (req, res) => {
    const cookie = req.cookies
    console.log(cookie);
    res.send('Hello, Musd!');
});

app.get('/example2', (req, res) => {
    res.cookie('name', 'Mujir')
    res.cookie('age', '23')
    res.clearCookie('age')
    res.send('Hello, Musd!');
})


app.listen(3005, function(){
    console.log('Server is running on port 3005');
})