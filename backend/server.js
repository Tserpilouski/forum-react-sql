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

app.get("/posts", (req, res) => {
  const sql = "SELECT * FROM posts";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error retrieving posts:", err);
      return res
        .status(500)
        .json({ success: false, message: "Error retrieving posts" });
    }
    console.log("Posts retrieved successfully");
    return res.status(200).json({ success: true, posts: results });
  });
});

app.delete("/posts/:postId", (req, res) => {
  const postId = req.params.postId;
  const sql = "DELETE FROM posts WHERE id = ?";
  db.query(sql, [postId], (err, result) => {
    if (err) {
      console.error("Error deleting post:", err);
      return res
        .status(500)
        .json({ success: false, message: "Error deleting post" });
    }
    if (result.affectedRows === 0) {
      // Пост с указанным ID не найден
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }
    console.log("Post deleted successfully");
    return res
      .status(200)
      .json({ success: true, message: "Post deleted successfully" });
  });
});

app.post("/posts", (req, res) => {
  const { user_id, title, content } = req.body; // Предполагается, что данные приходят в формате JSON

  // Проверка наличия обязательных данных
  if (!user_id || !title || !content) {
    return res
      .status(400)
      .json({ success: false, message: "Missing required fields" });
  }

  const created_at = new Date(); // Получаем текущую дату и время

  const sql =
    "INSERT INTO posts (user_id, title, content, created_at) VALUES (?, ?, ?, ?)";
  db.query(sql, [user_id, title, content, created_at], (err, result) => {
    if (err) {
      console.error("Error adding post:", err);
      return res
        .status(500)
        .json({ success: false, message: "Error adding post" });
    }
    console.log("Post added successfully");
    return res.status(200).json({
      success: true,
      message: "Post added successfully",
      postId: result.insertId,
    });
  });
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
  // const sql = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
  //Bezpieczne zapytanie:
  const sqlPlaceholder = `SELECT * FROM users WHERE email = ? AND password = ?`;
  db.query(sqlPlaceholder, [email, password], (err, result) => {
    if (err) {
      console.error("Error logging in:", err);
      return res
        .status(500)
        .json({ success: false, message: "Error logging in" });
    }
    if (result.length > 0) {
      console.log("Login successful");
      console.log(result[0]);
      return res
        .status(200)
        .json({ success: true, message: "Login successful", user: result });
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
