const express = require("express");
const app = express();
const path = require("path");

const dirPath = path.join(__dirname,'..');
app.use(express.static(path.join(dirPath,"public")));


const appId = "775d51e6c4d9bdf87217b1fe421a82c3";
const endPoint = "https://api.openweathermap.org/data/2.5/weather"

app.get("/", function(req, res){
  const mainFile = path.join(dirPath,'start.html');
  res.sendFile(mainFile);
});

app.listen(3000,function(){
  console.log("Server started on port 3000...")
});
