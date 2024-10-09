const express = require("express");
const app = express();

const middleware = (obj) => {
  return (req, res, next) => {
    console.log("Middleware is running");
    req.name = obj.name;
    req.age = obj.age;
    next();
  };
};
const middleware2 = (req, res, next) => {
  console.log("Middleware 2 is running");
  next();
};

app.use(middleware({ name: "Mujir", age: 20 })); // app level middleware
app.use(middleware2);

app.get("/example", (req, res) => {
    console.log(req.name + ": " + req.age);

    res.send("Hello, " + req.name + ": " + req.age);

});

app.get("/example",middleware({ name: "Mujir", age: 20 }), (req, res) => { // route level middleware
    console.log(req.name + ": " + req.age);

    res.send("Hello, " + req.name + ": " + req.age);

});

app.listen(3005, function () {
  console.log("Server is running on port 3005");
});
