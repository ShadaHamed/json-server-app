const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 8080;

// Use default middlewares (e.g., logging, CORS, etc.)
server.use(middlewares);

// Add custom routes here if needed
server.get('/custom', (req, res) => {
    res.json({ message: 'Hello from custom route!' });
});

// Use the JSON Server router
server.use(router);

// Start the server
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});

