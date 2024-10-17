const express = require('express');
const app = express();



app.get('/example', (req, res) => {
    res.send('Hello, Mujir!');
});



app.listen(3005, function(){
    console.log('Server is running on port 3005');
})