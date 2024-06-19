const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors package
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Use cors middleware

// Example data (replace with database or actual data handling)
let users = [
  { id: 1, name: 'RamyaManickam', email: 'ramyamanick1998@gmail.com', location: 'Bangalore', avatarUrl: 'https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png', description: 'Angular developer with 3 years of experience who is capable of designing rrsponsive, scalable web applications. ' },
  { id: 2, name: 'SabariGV', email: 'sabari@gmail.com', location: 'Ambur', avatarUrl: 'https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg', description: 'SabariGV is an AR associate with 3 years of experience who is capable of delivering works with 99% quality' }
];

let tasks = [
  { id: 1, title: 'Create User Authentication System', description: 'Develop a user authentication system to allow users to login, and manage their profiles securely.', completed: true },
  { id: 2, title: 'Implement Dashboard Layout and Navigation', description: 'Design and implement the layout structure for the dashboard and navigation menu.', completed: true },
  { id: 3, title: 'Manage Task List', description: 'Allow users to create, update, view, and delete tasks in the dashboard.', completed: true },
  { id: 4, title: 'Integrate Third-Party API for Weather Information', description: 'Integrate a third-party API to fetch and display weather information based on the users location.', completed: true },
  { id: 5, title: 'User Profile Management', description: 'Allow users to view and manage their profile information within the dashboard.', completed: true },
  { id: 6, title: 'Implement Task Assignment and Collaboration', description: 'Enable task assignment to specific users and facilitate collaboration between team members.', completed: false }
];

// Routes for Users
app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    ...req.body
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updateUser = req.body;
  let found = false;
  users = users.map(user => {
    if (user.id === userId) {
      found = true;
      return { ...user, ...updateUser };
    }
    return user;
  });
  if (found) {
    res.json(updateUser);
  } else {
    res.status(404).send('User not found');
  }
});

app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(user => user.id !== userId);
  res.status(204).send();
});

// Routes for Tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    res.json(task);
  } else {
    res.status(404).send('Task not found');
  }
});

app.post('/tasks', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    ...req.body
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const updateTask = req.body;
  let found = false;
  tasks = tasks.map(task => {
    if (task.id === taskId) {
      found = true;
      return { ...task, ...updateTask };
    }
    return task;
  });
  if (found) {
    res.json(updateTask);
  } else {
    res.status(404).send('Task not found');
  }
});

app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== taskId);
  res.status(204).send();
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
