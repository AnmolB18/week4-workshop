const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const users = [
  {
    username: "user1",
    birthdate: "1990-01-01",
    age: 34,
    email: "user1@example.com",
    password: "password1",
    valid: true
  },
  {
    username: "user2",
    birthdate: "1985-05-15",
    age: 39,
    email: "user2@example.com",
    password: "password2",
    valid: true
  },
  {
    username: "user3",
    birthdate: "2000-07-21",
    age: 24,
    email: "user3@example.com",
    password: "password3",
    valid: true
  }
];

app.post('/api/auth', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    const { password, ...userWithoutPassword } = user;
    res.status(200).json({ ...userWithoutPassword });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
