const express = require('express');

const app = express();



app.get('/bb', (req, res) => {
    res.send('Hello, Musd!');
});

app.post('/bb', (req, res) => {
    res.send('Hello, Musd! post');
});

app.put('/bb', (req, res) => {
    res.send('Hello, Musd! put');
});


app.patch('/bb', (req, res) => {
    res.send('Hello, Musd patch!');
});

app.delete('/bb', (req, res) => {
    res.send('Hello, Musd! delete');
});

app.listen(3005, function(){
    console.log('Server is running on port 3005');
})