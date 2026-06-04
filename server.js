const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Xinlo商城后端运行中');
});

app.post('/api/login', (req, res) => {
    const { username } = req.body;
    // Mock login response
    res.json({ message: `欢迎您, ${username}` });
});

// Listen to server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});