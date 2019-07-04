const Express = require('express');
const app = Express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const dbUrl = require('./db');

mongoose.connect(dbUrl, {useNewUrlParser: true}).then(() => {
    console.log("db connected");
}).catch((err) => {console.log('Can not connect to the database'+ err)});

app.get('/user/:empId', )

app.listen(port, () => {
    console.log("server is running on port", port);
})