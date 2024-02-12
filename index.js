const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

const member = require('./member.js');
const users = require('./users.js');

const about = {
    status: "Success",
    message: "Response Success",
    description: "Exercise #2",
    date: new Date(),
    data: member
};

// Middleware for logging
app.use(morgan('dev'));

// Route handlers
app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send("This is the home page");
});

app.get('/about', (req, res) => {
    res.statusCode = 210;
    res.setHeader('Content-Type', 'application/json');
    res.json(about);
});

app.get('/users', (req, res) => {
    res.statusCode = 220;
    res.setHeader('Content-Type', 'application/json');
    res.json(users);
});

// 404 Not Found handler
app.use((req, res) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.send('404 Not Found bro hehehe salam dari Andreas');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/ program by Wayne Stely Lamansiang`);
});
