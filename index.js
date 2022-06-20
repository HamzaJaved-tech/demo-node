const express = require("express");
 const app = express();

 const port =    process.env.PORT || 3000;

app.use('/',(res,req)=>{
     res.send("Hello World");
});

 app.listen(port);
