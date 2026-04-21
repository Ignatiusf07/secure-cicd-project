const express = require('express');
const app = express();

app.get('/', (req,res)=>{
  res.send("Secure CI/CD Project Running Successfully!");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});