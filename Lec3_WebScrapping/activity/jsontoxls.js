const fs= require("fs");
const json2xls=require("json2xls");

let jsonData= fs.readFileSync("./demo.json");
jsonData = JSON.parse(jsonData);

let xls= json2xls(jsonData);
fs.writeFileSync("./demo.xlsx",xls,'binary');
