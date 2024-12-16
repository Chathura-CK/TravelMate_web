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
      return res.send("User saved successfully");
    });
  } catch (error) {
    console.error("Error hashing password:", error.message);
    return res.status(500).send("Internal server error");
  }
});

// Login Route
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Validate the input
  if (!email || !password) {
    return res.status(400).send('Email and password are required');
  }

  // Query the database for the user by email
  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], async (err, results) => {
    if (err) {
      console.error('Database error:', err.message);
      return res.status(500).send('Internal server error');
    }

    if (results.length === 0) {
      return res.status(404).send('User not found');
    }

    // Check if the password matches
    const user = results[0];
    try {
      const isValid = await bcrypt.compare(password, user.password);

      if (!isValid) {
        return res.status(401).send('Invalid credentials');
      }

      // If login is successful
      return res.status(200).send('Login successful');
    } catch (error) {
      console.error('Error comparing passwords:', error.message);
      return res.status(500).send('Internal server error');
    }
  });
});

module.exports = router;
