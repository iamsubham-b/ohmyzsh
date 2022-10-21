const express = require('express');
const app = express();

app.get("/", function(req,res){
    res.send("<h2>we are now very close</h2>")
})

app.listen(3000,()=>{
    console.log("Serever started on port 3000");
});
