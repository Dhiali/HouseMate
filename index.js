const express = require('express');
const db = require('./models');
const app = express();

app.use(express.json());

// Example: Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Example: Get all tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await db.Task.findAll();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ...add more endpoints as needed...

// Sync DB and start server
db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
});
