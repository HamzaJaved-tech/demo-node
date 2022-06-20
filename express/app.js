const express = require('express');
const models = require("../sequelize")

const app = express();
app.get('/', async (req, res) => {

     try {

          models.task.findAll().then((task) => {
               return res.send("Task=>");
          }).catch((err) => {
               throw err;
          });

     } catch (error) {
          return res.send({ "errors": error, "message": "Catch error" });
     }


});


app.get('/create', async (req, res) => {

     // try {
     //      var task = await Task.create({ name: "First Task" }, { name: "This is my first task" });
     //      if (task) {
     //           return res.status(201).json({ task });
     //      } else {
     //           return res.status(400).json( { "message": "Error while creating this" })
     //      }

     // } catch (error) {
     //      return res.status(400).json({ error }, { "message": "We have an error" })
     // }



})



module.exports = app;