const express = require('express');

const app = express();

app.set('view engine', 'ejs')

app.get('/example', (req, res) =>{
    res.render("home.ejs", {name: 'Maasir', age : 20})
})


app.listen(3005, function(){
    console.log('Server is running on port 3005');
})