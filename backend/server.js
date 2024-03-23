const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "blog",
});

app.post("/signup", (req, res) => {
  const { username, email, password } = req.body;
  const sql = "INSERT INTO users (username, password, email) VALUES (?, ?, ?)";
  const values = [username, password, email];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error signing up:", err);
      return res
        .status(500)
        .json({ success: false, message: "Error signing up" });
    }
    console.log("User signed up successfully");
    return res
      .status(200)
      .json({ success: true, message: "User signed up successfully" });
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  //Zapytanie podatne na atak:
  const sql = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
  //Bezpieczne zapytanie:
  const sqlPlaceholder = `SELECT * FROM users WHERE email = ? AND password = ?`;
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error("Error logging in:", err);
      return res
        .status(500)
        .json({ success: false, message: "Error logging in" });
    }
    if (result.length > 0) {
      console.log("Login successful");
      return res
        .status(200)
        .json({ success: true, message: "Login successful" });
    } else {
      console.log("Incorrect email or password");
      return res
        .status(401)
        .json({ success: false, message: "Incorrect email or password" });
    }
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
