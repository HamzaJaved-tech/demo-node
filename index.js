const express = require("./express/app");
 const app = express();

app.use('/',(res,req)=>{
     res.send("Hello World");
});

 app.listen(3000);
