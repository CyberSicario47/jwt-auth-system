const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// Mock user data - replace this with your own user database
const users = [
  { id: 1, username: 'john', password: '$2b$10$5R16HNhqxXyH9cX5LRU4/OWg1u81CE3pXo.1S9bu.2etOPC8o1Tf6' }, // Password: secret
  { id: 2, username: 'jane', password: '$2b$10$3RXBN1Nclu1Dxmy2S5BFGuBL1B6bWj3pYcUt5ijGcdPX.m1Yds1u6' }  // Password: password
];

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find user by username
  const user = users.find(user => user.username === username);

  // User not found
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Compare the provided password with the hashed password in the database
  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  // Generate JWT token
  const token = jwt.sign({ id: user.id }, 'secret-key', { expiresIn: '1h' });

  // Send the token as a response
  res.json({ token });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
