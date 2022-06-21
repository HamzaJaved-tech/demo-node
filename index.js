const express = require("express");
const app = express();
let mysql = require('mysql');

const port = process.env.PORT || 3000;

let connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: '',
     database: 'todoapp'
});

connection.connect(function (err) {
     if (err) {
          return console.error('error: ' + err.message);
     }

     console.log('Connected to the MySQL server.');
});

app.use('/', (req, res) => {
     res.send("Hello World");
});

app.listen(port);
