const express = require("express");
const app = express();
const mongodb = require("mongodb");

const url = "mongodb://localhost:27017";
app.use(express.json());
const client = new mongodb.MongoClient(url);

client.connect().then(console.log("Client connected")).catch(console.error());

const db = client.db("schoolDB");
const student = db.collection("student");

//add student
app.post("/student", (req, res, next) => {
  const { name, age, email } = req.body;
  student
    .insertOne({ name: name, age: age, email: email })
    .then(() => {
      res.status(200).send("Added successfully");
    })
    .catch((err) => {
      res.status(500).send("Error: " + err);
    });
});

//add students
app.post("/students", (req, res, next) => {
  student
    .insertMany(req.body)
    .then(() => {
      res.status(200).send("Added successfully");
    })
    .catch((err) => {
      res.status(500).send("Error: " + err);
    });
});

//get student
app.get("/student", (req, res, next) => {
  const { name } = req.query;
  student
    .findOne({ name: name })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send("Error: " + err);
    });
});
//get students
app.get("/students", (req, res, next) => {
  const { age } = req.query;
  student
    .find({ age: parseInt(age) }).toArray()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send("Error: " + err);
    });
});

//update student
app.put("/student", (req, res) => {
  const { name } = req.query;  // Get 'name' from the route parameter
  const { age, email } = req.body;  // Get 'age' and 'email' from the request body

  student.findOneAndUpdate(
    { name },
    { $set: { age: parseInt(age), email: email } },  // Update 'age' and 'email'
    { new: true }  // Returns the updated document
  )
  .then((data) => {
    console.log(data);  // Log the updated student document
    res.status(200).json({ message: "Student updated successfully", student: data });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({ message: "Error updating student", error: err });
  });
});


//update students
app.put("/students", (req, res) => {
  const {age} = req.query;
  const {email} = req.body

  student.updateMany(
    { age: parseInt(age)},
    { $set : { email: email}}
  )
  .then((data) => {console.log(data);
    res.status(200).send({message: 'Successfully updated students'})})
  .catch((err) => {
    console.log(err);
    res.status(500).json({ message: "Error updating students", error: err });
  });
})

//delete student
app.delete("/student", (req, res) => {
  const { name } = req.query;
  student.deleteOne({ name })
   .then(() => {
      res.status(200).send("Student deleted successfully");
    })
   .catch((err) => {
      res.status(500).send("Error: " + err);
    });
})


//delete students
app.delete("/students", (req, res) => {
  const { age } = req.query;
  student.deleteMany({ age:parseInt(age) })
   .then((data) => {
    console.log(data);
      res.status(200).send("Students deleted successfully");
    })
   .catch((err) => {
      res.status(500).send("Error: " + err);
    });
})


app.listen(3005, function () {
  console.log("Server is running on port 3005");
});
