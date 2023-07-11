// Grab the express module
const express = require("express");

// The module is a function, run this function to create our app
const app = express();

// Simple middleware function to print the time in the console during
// every request
app.use((req, res, next) => {
    console.log("Time: ", Date.now());
    next();
});

// Adding path to middleware, function will only rn for requests sent to
// 127.0.0.1:3000/request-type
app.use("/request-type", (req, res, next) => {
    console.log("Request type: ", req.method);
    next();
});

// Built in middleware for serving static files
app.use("/public", express.static("public"));

// Handle get requests
app.get("/", (req, res) => {
    res.send("Successful response.");
});

// Server to listen on port 3000
app.listen(3000, () => console.log("Example app is listening on port 3000."));
