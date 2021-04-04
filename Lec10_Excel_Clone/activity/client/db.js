//database where cells are getting stored
let sheetsDB=[];
//db is in the form 100 rows having 26 cells each-- 2600 cells
function initDB(){
let newDB=[];
for(let i=0 ; i<100 ; i++){
    let row = [];
    for(let j=0 ; j<26 ; j++){
        // adress in the form of --> A1,A5 ,Z1..
        let address = String.fromCharCode(65+j) + (i+1); 
        let cellObject = {
            name:address,
            value:"", 
            formula:"",
            childrens:[],
            parents:[]
        }
        row.push(cellObject);
    }
    newDB.push(row);
}
sheetsDB.push(newDB);
}
initDB();

let db=sheetsDB[0];