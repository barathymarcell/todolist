// server.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON bodies

// Dummy data to store todos
let todos = [];

// Get all todos
app.get('/todo', (req, res) => {
    res.json(todos);
});

// Add a new todo
app.post('/todo', (req, res) => {
    const { todo_text } = req.body;
    const newTodo = { id: Date.now(), todo_text };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Edit an existing todo
app.put('/todo/:id', (req, res) => {
    const { id } = req.params;
    const { todo_text } = req.body;
    let todo = todos.find(todo => todo.id === parseInt(id));
    if (todo) {
        todo.todo_text = todo_text;
        res.json(todo);
    } else {
        res.status(404).send('Todo not found');
    }
});

// Delete a todo
app.delete('/todo/:id', (req, res) => {
    const { id } = req.params;
    todos = todos.filter(todo => todo.id !== parseInt(id));
    res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
