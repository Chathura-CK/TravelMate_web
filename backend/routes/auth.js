const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');
const router = express.Router();

// Register Route
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("All fields are required");
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    const values = [name, email, hashedPassword];

    db.query(sql, values, (err, results) => {
      if (err) {
        console.error("Error saving user:", err.message);
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(400).send("Email already exists");
        } else {
          return res.status(500).send("Error saving user");
        }
      }

      // Respond with the newly created user's ID
      const userId = results.insertId;
      return res.status(201).json({ message: "User saved successfully", userId });
    });
  } catch (error) {
    console.error("Error hashing password:", error.message);
    return res.status(500).send("Internal server error");
  }
});

// Login Route
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Email and password are required');
  }

  const sql = 'SELECT id, name, profileImage, password FROM users WHERE email = ?';
  
  db.query(sql, [email], async (err, results) => {
    if (err) {
      console.error('Database error:', err.message);
      return res.status(500).send('Internal server error');
    }

    if (results.length === 0) {
      return res.status(404).send('User not found');
    }

    const user = results[0];
    try {
      const isValid = await bcrypt.compare(password, user.password);

      if (!isValid) {
        return res.status(401).send('Invalid credentials');
      }

      // Respond with user data
      return res.status(200).json({
        id: user.id,
        name: user.name,
        profileImage: user.profileImage,
      });
    } catch (error) {
      console.error('Error comparing passwords:', error.message);
      return res.status(500).send('Internal server error');
    }
  });
});

module.exports = router;
