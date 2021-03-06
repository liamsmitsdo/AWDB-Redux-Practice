const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(cors());
app.use("/api/todos", todoRoutes);

app.use(function(req,res,next) {
    let err = new Error("Not found");
    err.status = 404;
    next(err);
})

app.use(function(err,req,res,next) {
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: err
    });
})

app.listen(3001, () => console.log("server running on port 3001"))