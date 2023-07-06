const app = require('./app');
const http = require("http");

const normalizePort = val => {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
};


app.get("/message", (req, res) => {
    res.json({ message: 'Hello from server' });
    console.log(__dirname);
});

const port = normalizePort(process.env.PORT || "3001");
app.set("port", port);

const server = http.createServer(app);
server.listen(port, () => {
    console.log('server is running on port 3001')
});



