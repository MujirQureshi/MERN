const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const url = "mongodb://localhost:27017/schoolDB";

mongoose
  .connect(url)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  dept: String,
});

const Student = mongoose.model("Student", studentSchema);

//add   student
app.post("/student/single", async (req, res, next) => {
  try {
    const { name, age, email, dept } = req.body;

    const student = new Student({ name, age, email, dept });
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(500).send("Error: " + error);
  }
});

//add students
app.post("/student/multiple", async (req, res, next) => {
  try {
    await Student.insertMany(req.body);
    res.status(201).send({ message: " students added successfully" });
  } catch (error) {
    res.status(500).send("Error: " + error);
  }
});

//get student
app.get("/student/single", async (req, res, next) => {
  try {
    const { email} = req.query;
    const student = await Student.findOne({ email });
    res.status(200).json({data: student})
  } catch (error) {
    res.status(500).send("Error: " + error);
  }
});

//get student 2
app.get("/student/single/:id", async (req, res, next) => {
  try {
    const { id} = req.params;
    const student = await Student.findById(id);
    res.status(200).json({data: student})
  } catch (error) {
    res.status(500).send("Error: " + error);
  }
});

//get students
app.get("/student/multiple", async (req, res, next) => {
  try {
    const { dept } = req.query;

    const students =await Student.find({ dept });

    res.status(201).json({data:students});
  } catch (error) {
    res.status(500).send("Error: " + error);
  }
});

//update student
app.put("/student/single", async (req, res) => {
  try {
    const { name } = req.query; // Assuming name is used in the query
    const { age, dept } = req.body;

    // Find the student by age and update
    const updatedStudent = await Student.findOneAndUpdate(
      { name }, // Filter
      { age, dept }, // Update
      { new: true } // Option to return the updated document
    );

    if (!updatedStudent) {
      return res.status(404).send({ message: "Student not found" });
    }

    res.status(200).send({
      message: "Student updated successfully",
      student: updatedStudent,
    });
  } catch (error) {
    res.status(500).send("Error: " + error);
  }
});

//update student 2
app.put("/student/single/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { dept } = req.body;

    // const student = await Student.findById(id); OR
    const student = await Student.findOne({_id:id})
    if (!student) {
      return res.status(404).send("Student not found");
    }

    student.dept = dept;
    await student.save();

    res.status(200).send({
      message: "Student updated successfully",
      student: student,
    });
  } catch (error) {
    res.status(500).send("Error: " + error);
  }
});

//update students
app.put("/student/multiple", async (req, res) => {
  try {
    const {dept} = req.params;
    const { age } = req.body;

    await Student.updateMany({dept}, {age});
    res.status(201).json({message:"Students updated successfully"});
  } catch (error) {
    res.status(500).send("Error: " + error);
  }
});

//delete student
app.delete("/student/single", async (req, res) => {
  try {
    const { name } = req.query;
    const student = await Student.findOneAndDelete(name)

    res.status(200).json({data: student})
    
  } catch (error) {
    res.status(500).send("Error: " + error);
  }
});

//delete student 2
app.delete("/student/single/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndDelete(id)

    res.status(200).json({data: student})
    
  } catch (error) {
    res.status(500).send("Error: " + error);
  }
});

//delete students
app.delete("/student/multiple", async (req, res) => {
  try {
    const { dept } = req.query;

    await Student.deleteMany({ dept });
    res.status(201).json({message: "Students deleted successfully"});
  } catch (error) {
    res.status(500).send("Error: " + error);
  }
});

app.listen(3005, function () {
  console.log("Server is running on port 3005");
});
